import React from 'react'
import { Typography, TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div>
      <form className='form' action="">
        <Typography variant='h3'>Login Form: </Typography>
        <label htmlFor="Username">
            <h3>Username: </h3>
            <TextField
                sx={{input:{backgroundColor:"#3f3f3f",borderRadius:"8px",width:"400px"}}}
                required
                variant='outlined'
                label='Username'
                color='success'
            />
        </label>
        <label htmlFor="Password">
            <h3>Password: </h3>
            <TextField
                sx={{input:{backgroundColor:"#3f3f3f",borderRadius:"8px",width:"400px"}}}
                required
                variant='outlined'
                label='Password'
                color='secondary'
            />
        </label>
        <Button variant="outlined" color='success'><Link to={"/info"} style={{color:"green",textDecoration:"none"}}>Submit</Link></Button>     
      </form>
    </div>
  )
}

export default Login
