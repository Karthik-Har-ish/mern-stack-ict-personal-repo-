import React from 'react'
import { CardContent,Typography,Card,CardMedia,CardActions,Button } from "@mui/material"
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <div>
      <div className='card'>
        <Card sx={{width:"600px",height:"500px"}}>
            <CardContent>
                <Typography gutterBottom variant="h3" >This is a card!</Typography>
                <CardMedia
                    sx={{height:"240px"}}
                    image="https://images.unsplash.com/photo-1736079418247-f0b7598a4631?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title=""
                />
            </CardContent>
            <CardActions>
                <Button size="small"><Link to={"/table"} style={{textDecoration:"none"}}>More</Link></Button>
                <Button size="small">Share</Button>
            </CardActions>
        </Card>
      </div>
    </div>
  )
}

export default Info
