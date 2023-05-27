import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputAdornment from '@mui/material/InputAdornment';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
export const SendMessages = ({ date,price }) => {
  const [state, setState] = useState(1);
  const [msg, setMsg] = useState("");
  const handleOnChange = (e) => {
    e.preventDefault();
    setMsg(e.target.value);
  };
  const handleOnClick = (e) => {
    e.preventDefault();
    let mesg = `The price of the stock for the date ${date} is ${price}`;
    let num = msg;
    let url = `https://web.whatsapp.com/send?phone=${num}&text=${encodeURI(
      mesg
    )}&app_absent=0`;
    window.open(url);
  };
  const handle = () => {
   
    setState(2);
  };
  return (
    <>
      {state === 1 && (
        <div style={{ margin: "10px" }}>
          <Stack direction="column" spacing={2}>
            <TextField
              variant="outlined"
              label="Enter contact number"
              InputProps={{
                startAdornment: <InputAdornment position="start"><IconButton></IconButton><WhatsAppIcon/>|</InputAdornment>,
              }}
              onChange={(e) => {
                handleOnChange(e);
              }}
            />
             
              <Button
                sx={{ backgroundColor: "#2E3B55", color: "#ffff" }}
                onClick={(e) => handleOnClick(e)}

              >
                Send
              </Button>
              <Button
                sx={{ backgroundColor: "#2E3B55", color: "#ffff" }}
                onClick={(e) => handle(e)}
              >
                Cancel
              </Button>
            
          </Stack>
        </div>
      )}
    </>
  );
};
