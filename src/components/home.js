import { Button, TextField } from '@mui/material';
import React, {useEffect, useState} from 'react';
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

  const [exams, setExams] = useState()

  useEffect(() => {
     exam()
      
  }, [])

  const  exam = async() => {
    const response =  fetch("http://127.0.0.1:5000/api/get_exam_data/",
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // "Accept": "application/json"
    },
  
    }
    
    )
    console.log(response);
  
    // setExams(await response.json())
  }

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
          <br />
          {exams}
        </Typography>
        <Typography variant="body2">
        You passed 
        </Typography>
     </CardContent>
    
    </Card>
    </Box>
    
  );
}