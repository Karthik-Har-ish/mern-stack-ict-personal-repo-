import { useEffect, useState } from "react"
import axios from "axios"
import { Grid2 } from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Shop(){
    let [out,setOut]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((resp)=>{

            console.log(resp.data)
            setOut(resp.data)
        })
        .catch((err)=>{
            console.err(err)
        })
    },[])


    return(
        <>
            <Typography className="center" sx={{color:"black"}} variant="h3">Welcome to Our Shop!</Typography>
            
            <div className="center">
            <Grid2 container spacing={2}>
            {
                out.map((out)=>{
                                    return (<Card key={out.title} sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            component="img"
                                            alt={out.title}
                                            height="140"
                                            image={out.image}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                            {out.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {out.description}
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div">
                                            $ {out.price}
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{display:"flex",alignItems:"flex-end"}}>
                                            <Button size="small">Buy</Button>
                                            <Button size="small">Add to cart</Button>
                                        </CardActions>
                                        </Card>) 
                })
            }
            </Grid2>
            </div>
            
            
            

        </>
    )
}

