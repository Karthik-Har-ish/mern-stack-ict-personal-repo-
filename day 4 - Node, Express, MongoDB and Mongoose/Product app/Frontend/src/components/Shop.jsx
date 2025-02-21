import React, { useEffect } from 'react'
import { Typography,Grid2 } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Shop = () => {
  let [products,setProducts] = React.useState([])
  const link = "http://localhost:5000/shop"
  
  // TODO: MAKE SURE TO LOOK INTO THE ERROR: ERR_CONNECTION_REFUSED
  React.useEffect(()=>{
    axios.get(link)
      .then((res)=>{
        console.log(res.data)
        setProducts(res.data.products)

      })
      .catch((err)=>{
        console.log(err)
      })
  },[])

  const productEl=products.map((product)=>{ return(
    <Product
      key={product.id}
      _id={product._id}
      id={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
      image={product.image}
      category={product.category}
    />)})

  console.log(products)

  

  return (
    <div className='product-grid-container'>
        <Grid2 container spacing={3} sx={{width:"80vw",height:"80vh"}}>
                {productEl}
        </Grid2>
    </div>
  )
}


function Product(props) {
  const navigate = useNavigate()
    
  function deleteProduct(identity){
    
      axios.delete("http://localhost:5000/product-delete/"+identity)
      .then((res)=>{
        alert(res.message)
      })
      .catch((err)=>{
        console.log(err)
      })
      window.location.reload()
    }

  function updateProduct(val){
    navigate("/product-add",{state:{val}})
  }

  function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
    return (
      <Grid2>
      <Card sx={{ borderRadius:"20px", backgroundColor:"#161616" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={props.image}
          title={props.title}
          aria-label={props.title}
        />
        <CardContent>
          <Typography sx={{color:"white",fontWeight:"900"}} gutterBottom variant="h5" component="div">
            {capitalizeFirstLetter(props.title)}
          </Typography>
          <Typography sx={{color:"white",fontWeight:"900"}} gutterBottom variant="h5" component="div">
            ${props.price}
          </Typography>
          <Typography variant="body2" sx={{ color: 'gray' }}>
            {props.description}
          </Typography>
          <Typography variant="h9" sx={{ color: 'white' }}>
            {props.category}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={()=>{updateProduct(props)}}>Update</Button>
          <Button size="small" onClick={()=>{console.log(`Deleted product ${props}`);deleteProduct(props._id)}}>Delete</Button>
        </CardActions>
      </Card>
      </Grid2>
    );
  }


export default Shop
