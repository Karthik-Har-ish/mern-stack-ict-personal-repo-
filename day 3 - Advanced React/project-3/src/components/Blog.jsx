import { Typography } from "@mui/material"

export default function Blog(){
    return(
        <>
        <div className="center">
            <Typography variant="h2" sx={{color:"black"}}>Personal Blog:</Typography>
            
        </div>
        <Typography sx={{marginLeft:"40px",color:"black"}}>
                Hello friends! This is my personal blog :thumbs_up:
        </Typography>
            
        </>
    )
}