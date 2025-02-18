import React from "react"
import {Button,TextField} from "@mui/material"


export default function Hello(){
    let [name,setName] = React.useState("")
    let [displayedName,setDisplayedName]=React.useState("")
    let [position,setPosition] = React.useState("Home")
    let [count,setCount]=React.useState(0)
    function handleClick(){
        setDisplayedName((prevName)=>{
            return name
            }
        )
    }
    function inputHandle(e){
        setName(e.currentTarget.value)
    }
    function increment(){
        setCount((a)=>a+1)
    }
    function decrement(){
        setCount((a)=>a-1)
    }
    return(
        <>
            <h1>Hello {displayedName}!</h1>
            <TextField
                id="text-field-el"
                sx={{input:{backgroundColor:"#3f3f3f",borderRadius:"8px",width:"400px"}}}
                required
                onChange={inputHandle}
                variant='outlined'
                label='Name'
                color='success'
            />
            <Button id="button" type="default" onClick={handleClick}>
                Change Name
            </Button>
            <h1>Welcome to {position}!</h1>
            <button onClick={()=>{setPosition("Home")}}>Home</button>
            <button onClick = {()=>{setPosition("Gallery")}}>Gallery</button>
            <button onClick = {()=>{setPosition("Contacts")}}>Contacts</button>

            <br /><br /><br /><br />
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>


        

    )
}