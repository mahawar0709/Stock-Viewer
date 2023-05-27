const nodemailer = require("nodemailer");
const Mailgen = require('mailgen')
const {EMAIL,PASS} = require('../env.js')

const getBill = async (req, res) => {

    const {email, price, date} = req.body

    let config = {
        service: 'gmail',
        auth: {
            user: EMAIL,
            pass: PASS
        }
    }

    let transporter = nodemailer.createTransport(config)
    let MailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: 'Stock Viewer',
            link: 'https://mailgen.js/'
        }
    })

    let response = {
        body: {
            name: `${email}`,
            intro: `👋 from Stock Viewer! The stock price for the date ${date} is ${price}!`,
        }
    }

    let mail = MailGenerator.generate(response)

    let message = {
        from: EMAIL,
        to: email,
        subject: 'Your Stock Price',
        html: mail
    }

    try {
        await transporter.sendMail(message)
        return res.status(201).json({message: 'Email sent'})
    } catch(err) {
        console.log(err)
        return res.status(500).json({message: 'Error sending email'})
    }

    res.status(201).json({message: 'Email sent'})
}

module.exports = {
    getBill
}