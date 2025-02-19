import { useState } from "react"
import { Typography,Button } from "@mui/material"

const Count = ()=>{
    let [count,setCount]=useState(0)
    function incr(e){
        setCount(a=>a+1)
    }
    function decr(){
        setCount(a=>{
            if(a==0){
                return 0
            }
            return a-1
        })
    }
    return(
        <>
        <div className="center">
            <Typography variant="h1" sx={{color:'black'}}>Count : {count}</Typography>
            <Button variant="contained" onClick={incr}>Increment</Button>
            <Button variant="contained" onClick={decr}>Decrement</Button>
        </div>
            
        </>
    )
}

export default Count