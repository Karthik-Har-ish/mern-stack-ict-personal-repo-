import { Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { Card,CardContent,Link,CardHeader } from "@mui/material"
import { Key } from "@mui/icons-material";


const ApiGet = ()=>{
    let [out,setOut] = useState([])
    // useEffect(()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //     .then((resp)=>{
    //         // setOut([...out,resp])
    //         setOut(()=>{
                
    //             return resp.data
                
    //         })
    //     })
    //     .catch((err)=>(console.err(err)),[])}).finally(()=>{
    //         setTimeout(()=>{
    //             console.log(out)
    //         }),4000})

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((resp)=>{
            setOut(resp.data)
            
        })
        .catch((err)=>{
            console.err(err)
        }).finally(
            ()=>{
                setTimeout(()=>{
                    console.log(out)
                },4000)
            }
        )
    },[])
    console.log(out)
    return(
        <>
            <Typography className="center" sx={{color:"black"}} variant="h3">Welcome to Axios!</Typography>
            <Typography className="center">{out.name}</Typography>
            <div className="card-container">
            {
            out.map((out)=>{
                return (<UserCard
                user={out.user}
                name={out.name}
                phone={out.phone}
                email={out.email}
                address={out.address}
                website={out.website}
                />)}
            )
            }
            </div>
            
            {/* <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>E-mail</TableCell>
                            <TableCell>City</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer> */}

            

        </>
    )
};

export const UserCard = (props)=>{
    return(
        <>
        <Card
        sx={
            {
                width:"600px",
            }
        }>
            <CardContent>
                <CardHeader>{props.user}</CardHeader>
                <Typography>{props.name}</Typography>
                <Typography>{props.email}</Typography>
                <Typography>{props.address.suite}, {props.address.street}, {props.address.city} {props.address.zipcode}</Typography>
                <Typography>{props.phone}</Typography>
                <Link to={props.website}>{props.website}</Link>
            </CardContent>
            
        </Card>
        </>
    )
};
export default ApiGet