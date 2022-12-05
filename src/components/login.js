import { Button, TextField } from '@mui/material';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export const  Login = () => {
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
            <Box component="form">
                <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label="Email Address"
                name='email'
                autoComplete='email'
                autoFocus
                />
            <TextField
            margin='normal'
            required
            fullWidth
            id='password'
            label="Password"
            type="password"
            autoComplete='password'
            />
            <FormControlLabel
            control={<Checkbox value="remember" color="primary"/>}
            label="Remember me"
            />
            <Button
            type='submit'
            fullWidth
            variant='contained'
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