const express = require('express')
const appRoute = require('./routes/route.js')
const app = express()
const cors = require('cors')
app.use(express.json())
const corsOrigin ={
    origin:'http://localhost:3000', //or whatever port your frontend is using
    credentials:true,            
    optionSuccessStatus:200
}
app.use(cors(corsOrigin));
app.use('/api',appRoute)
app.listen(8080, ()=>{
    console.log("listening on port 8080")
})