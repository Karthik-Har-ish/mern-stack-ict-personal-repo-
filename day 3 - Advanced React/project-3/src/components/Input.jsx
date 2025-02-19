import { TextField, Typography, Button } from "@mui/material";
import { useState } from "react";


const Input=()=>{

    const inputNames=["Name","Place","Age","E-Mail"]

    let [input,setInput]=useState({})

    function handleChange(e){
        setInput({...input,[e.currentTarget.name]:e.currentTarget.value})
        console.log(input)
    }

    return(
        <>


        <div className="center">
            { inputNames.map((value)=>{
                return (<div key={value} className="text-input">
                    <Typography variant="h5" sx={{color:"black"}}>{value}: </Typography>
                    <TextField name={value} value={input.value} onChange={handleChange} className="input"></TextField>
                </div>)
            })}
            <Button>Submit</Button>
        </div>
        
        </>
    )
};

export default Input