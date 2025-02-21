import { useEffect, useState } from 'react'
import {TextField, Typography, Button} from "@mui/material"
import axios from "axios"
import { useNavigate,useLocation } from 'react-router-dom'

const AddProduct = () => {

  
  const location = useLocation()
  const navigate = useNavigate()
  function addProduct(){
    
      axios.post("http://localhost:5000/product",product)
      .then((res)=>{
        navigate("/shop",{state:null})
      })
      .catch((err)=>{
        console.log(err)
      })
    
    product={}
    navigate("/shop")
  }


  var [product,setProduct]=useState({})
  const textfields = ['id',"title","price","description","image","category"] 

  useEffect(
    ()=>{
      if(location.state!=null){
        setProduct({...product,
          _id:location.state.val._id,
          id:location.state.val.id,
          title:location.state.val.title,
          price:location.state.val.price,
          description:location.state.val.description,
          image:location.state.val.image,
          category:location.state.val.category
        })
      }
    },[]
  )


  function handleChange(e){

    setProduct({...product,[e.currentTarget.name]:e.currentTarget.value})
    console.log({[e.currentTarget.name]:e.currentTarget.value})
    console.log(product)
  }

  function updateProduct(){
    axios.put("http://localhost:5000/product/"+product._id,product)
      .then((res)=>{
        console.log(res.message)
        product={}
      })
      .catch((err)=>{
        console.log(err)
      })
    
    product={}
    navigate("/shop")
  }

  return (
    <div>
      <form>
      <Typography variant="h3" sx={{marginLeft:"6vw",marginTop:"40px"}}>Add Product:</Typography>

      <div className='inputs'>
      {textfields.map((name)=>{
        return(
          <TextField 
          key={name}
          sx={{marginTop:"20px",backgroundColor:"white",width:"30vw",borderRadius:"20px"}} 
          label={name} 
          defaultValue={(product[name]===null)?"":product[name]} 
          name={name} 
          onChange={handleChange}></TextField>
        )
      })}
      <Button onClick={(location.state===null)?addProduct:updateProduct} variant='contained' sx={{marginTop:"20px",marginLeft:'1vw'}}>{(location.state===null)?"Add Product!":"Update Product!"}</Button>
      </div>
      
      </form>
    </div>
  )
}

export default AddProduct
