import React, { useState } from 'react'
import Box from "@mui/material/Box";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IconButton from '@mui/material/IconButton';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Stack,
    Typography,
  } from "@mui/material";
import { SendMessages } from './SendMessages';
import {SendMail} from './SendMail.js';
export const Info = (props) => {
  // console.log(props.value)
  const[state,setState] = useState(1) 
  const [price,setPrice] = useState("")
  const handleState = () => {
    setState(2)
  }
  
  const handleStatemail = () =>{
    setState(3)
    setPrice(props.data['2. high'])
  }
  return (
    <>
    <div>
        <Box sx={{ margin: 3, boxShadow:"#2E3B55" }} gridColumn="span 3">
          <Card>
            <CardContent>
              <Typography variant="h5">{props.value}</Typography>
              <Typography sx={{ fontSize: 16 }}> Open: {props.data['1. open']}</Typography>
              <Typography sx={{ fontSize: 16 }}> High: {props.data['2. high']} </Typography>
              <Typography sx={{ fontSize: 16 }}> Low: {props.data['3. low']}</Typography>
              <Typography sx={{ fontSize: 16 }}> Close: {props.data['4. close']}</Typography>
              <Typography sx={{ fontSize: 16 }}>
                Adjusted close: {props.data['5. adjusted close']}
              </Typography>
              <Typography sx={{ fontSize: 16 }}> Volume:{props.data['6. volume']}</Typography>
              <Typography sx={{ fontSize: 16 }}>
            
                Dividend amount: {props.data['7. dividend amount']}
              </Typography>
              <Typography sx={{ fontSize: 16 }}>
                
                Split coefficient: {props.data['8. split coefficient']}
              </Typography>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:"space-between"}}>
              <Stack direction="column" spacing={1}>
                
              <Stack
              direction="row" 
               sx={{display:"flex", alignItems:"center"}}
              >
                <IconButton  onClick={handleStatemail}><MailOutlineIcon/> </IconButton>
                <Typography>or</Typography>
                <IconButton  onClick={handleState}><WhatsAppIcon/></IconButton>
              </Stack>
              {state==2 &&  <SendMessages date={props.value} price={price}/>}
              {state==3 &&  <SendMail date={props.value} price={price}/>}
              </Stack>
            </CardActions>
          </Card>
        </Box>
</div>
 </>
  )
}
