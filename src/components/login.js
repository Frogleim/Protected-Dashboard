import { Button, TextField } from '@mui/material';
import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';



async function login(creds) {
    // console.log(creds);
    console.log(JSON.stringify(creds));
    // let item = {email, password}
    let result = await fetch("http://127.0.0.1:5000/api/login/",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // "Accept": "application/json"
    },
    body: creds

    }
    
    ).then(data => data.json())
}

export const  Login = () => {

    const history = useHistory();



    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    console.log(email);
    console.log(password);
    const handleSubmit = async e => {
        e.preventDefault();
        const response = await login(JSON.stringify({"email": email, "password": password}))
    if ('idToken' in response) {
        swal("Success", response.message, "success", {
          buttons: false,
          timer: 2000,
        })
        .then((value) => {
          localStorage.setItem('accessToken', response['refreshToken']);
          localStorage.setItem('user', JSON.stringify(response['email']));
          window.location.href = "/home";
        });
    } else {
        swal("Failed", response.message, "error");
      }

    }
    

    return (
        <Box
        sx={{
            marginTop: 8, 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}
        >
            <Typography component="h1" variant="h5">
                Sign In
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label="Email Address"
                name='email'
                autoComplete='email'
                autoFocus
                onChange={(e)=>setEmail(e.target.value)}
                />
            <TextField
            margin='normal'
            required
            fullWidth
            id='password'
            label="Password"
            type="password"
            autoComplete='password'
            onChange={(e)=>setPassword(e.target.value)}
            />
            <FormControlLabel
            control={<Checkbox value="remember" color="primary"/>}
            label="Remember me"
            />
            <Button
            type='submit'
            fullWidth
            variant='contained'
            // onClick={login}
            sx={{mt: 3, mb: 2}}
            >
                Sign In

                </Button>

                <Grid container>
                    <Grid item xs>
                        <Link href='#' variant='body2'>
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href='#' variant='body2'>
                            {"Don't  have account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>

            </Box>

        </Box>
    )
} 