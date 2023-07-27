import { useEffect, useState } from "react";
import "./App.css";
import jwt_decode from "jwt-decode";
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { Dashboard } from "./Dashboard";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { SendMessages } from "./SendMessages";
function App() {
  const [user, setUser] = useState({});
  const [state, setState] =useState(1);
  function handleSignOut(e) {
    setUser({});
    setState(1)
  }
  useEffect(() => {
    /*global google*/
    function handleCallbackResponse(response) {
      console.log("Encoded JWT token: " + response.credential);
      var userObject = jwt_decode(response.credential);
      console.log(userObject);
      setUser(userObject);
      setState(2)
    }

    google.accounts.id.initialize({
      client_id:
        "550898258329-uq5323q0p2qn3otb01hvqck3ab3r52m6.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    
  }, [state]);

  return (
    <>
      {state===1 && 
      
    //   <div className="login">
    //   <div className="loginWrapper">
    //     <div className="loginLeft">
    //       <h3 className="loginLogo">StockByte</h3>
    //       <span className="loginDesc">
    //         Fetch stock details and send around the world on StockByte
    //       </span>
    //     </div>
    //     <div className="loginRight">
    //       <div className="loginBox" >
    //         <span className="loginForgot">Sign In using your google account</span>
    //         <div
    //          style={{
    //            display: "flex",
    //            justifyContent: "center",
    //            alignItems: "center",
    //          }}
    //          id="signInDiv"
    //        ></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

      <div
       
       style={{
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         marginTop: "9px",
       }}
     >
       <Stack
         direction="row"
         marginLeft={0}
         spacing={2}
         sx={{
           display: "flex",
           justifyContent: "Center",
           alignItems: "Center",
         }}
       >
         <Stack>
           <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
         </Stack>
         <Stack
           direction="column"
           spacing={3}
           sx={{
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
           }}
         >
           <Typography variant="h2">Stock Viewer</Typography>
           <Typography variant="h6">
             Sign In using your google account
           </Typography>
           <div
             style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
             }}
             id="signInDiv"
           ></div>
         </Stack>
       </Stack>
       
     </div>
     }

      {Object.keys(user).length !== 0 && (
        <>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" style={{ background: '#2E3B55' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Stock Viewer
            </Typography>
            <Stack direction="row" spacing={2} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Avatar alt={user.given_name}src={user.picture} />
            <Typography>{user.given_name}</Typography>
            <Button  onClick={(e) => {
              handleSignOut(e);
            }} color="inherit" variant="outlined">Logout</Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      <Dashboard />
      </>
      )}
    </>
  );
}

export default App;
