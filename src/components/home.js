import { Button, TextField } from '@mui/material';
import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
// import MenuIcon from '@mui/icons-material/Menu';

export default function  Home()  {
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);
//   const user = JSON.parse(localStorage.getItem('user'));

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("user");
//     window.location.href = "/";
//   };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Card sx={{ minWidth: 275}}>
     <CardContent>
     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Exam result
        </Typography>
        <Typography variant="h5" component="div">
          Your score is:
        </Typography>
       
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <Typography variant="body2">
        You passed 
        </Typography>
     </CardContent>
    
    </Card>
    </Box>
    
  );
}