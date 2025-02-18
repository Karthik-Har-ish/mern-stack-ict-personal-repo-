import React from 'react'
import { Box,IconButton,AppBar,Toolbar,Typography, TextField,Button,Card,CardContent,CardMedia,CardActions } from '@mui/material'
import {TableContainer, Table, TableHead,TableBody,TableCell,TableRow} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const Component = () => {
  return (
    <div>
        {/* AppBar */}
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"black"}}>
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    {/* Typography and Textfield */}
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
        <label htmlFor="Password">
            <h3>Password: </h3>
            <TextField
                sx={{input:{backgroundColor:"#3f3f3f",borderRadius:"8px",width:"400px"}}}
                required
                variant='outlined'
                label='Password'
                type='password'
                autoComplete='current-password'
                color='secondary'
            />
        </label>
        <label htmlFor="Password">
            <h3>Password: </h3>
            <TextField
                sx={{input:{backgroundColor:"#3f3f3f",borderRadius:"8px",width:"400px"}}}
                required
                variant='outlined'
                label='Email'
                color='secondary'
            />
        </label>
        <Button variant="outlined" color='success'>Submit</Button>

        
        
      </form>

      {/* TABLE USING MATERAIL UI */}
      <div className="table">
        <TableContainer>
            <Table style={{width:"1400px",backgroundColor:"white"}}>
                <TableHead>
                    <TableRow>
                        <TableCell>Letter</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Place</TableCell>
                        <TableCell>Animal</TableCell>
                        <TableCell>Thing</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>K</TableCell>
                        <TableCell>Karthik</TableCell>
                        <TableCell>Kenya</TableCell>
                        <TableCell>Kangaroo</TableCell>
                        <TableCell>Kite</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
      </div>

      {/* CARD USING MATERAIL UI */}
      <div className='card'>
        <Card sx={{width:"600px",}}>
            <CardContent>
                <Typography gutterBottom variant="h3" >This is a card!</Typography>
                <CardMedia
                    sx={{height:"240px"}}
                    image="https://images.unsplash.com/photo-1736079418247-f0b7598a4631?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title=""
                />
            </CardContent>
            <CardActions>
                <Button size="small">More</Button>
                <Button size="small">Share</Button>
            </CardActions>
        </Card>
      </div>
    </div>
  )
}

export default Component

