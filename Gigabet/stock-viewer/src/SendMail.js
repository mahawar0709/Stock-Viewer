import React, { useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios"
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import IconButton from '@mui/material/IconButton';
import TextField from "@mui/material/TextField";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
export const SendMail = ({date,price}) => {
    const [mail,setMail]=useState("")
    const[state,setState] = useState(1)
    const handleMail = () =>{
        axios.post("http://localhost:8080/api/product/getBill",{
            email : mail,
            price : price,
            date: date
        }).then((res)=>{
            console.log({mail,price})
        }).catch((err)=>{
            console.log(err)
        })
        console.log(mail)
    }
    const handleState = () =>{
        setState(2)
    }
  return (
    <div>
     {state===1 && <div style={{ margin: "10px" }}>
        <Stack direction="column" spacing={2}>
          <TextField 
          variant="outlined" 
          label="Enter mail" 
          value={mail} 
          InputProps={{
            startAdornment: <InputAdornment position="start"><IconButton></IconButton><MailOutlineIcon/></InputAdornment>,
          }}
          onChange = {(e)=>setMail(e.target.value)} />

          <Button sx={{ backgroundColor: "#2E3B55", color: "#ffff" }} onClick={handleMail} >
            Send
          </Button>
          <Button sx={{ backgroundColor: "#2E3B55", color: "#ffff" }} onClick={handleState}>
            Cancel
          </Button>
        </Stack>
      </div>}

    </div>
  );
};
