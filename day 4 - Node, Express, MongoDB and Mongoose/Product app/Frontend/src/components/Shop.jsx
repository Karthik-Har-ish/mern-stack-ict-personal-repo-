import React from 'react'
import { Typography,Grid2 } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import axios from "axios"

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
      id={product.id}
      title={product.title}
      price={product.price}
      desc={product.description}
      image={product.image}
      category={product.category}
    />)})

  console.log(productEl)
  return (
    <div className='product-grid-container'>
        <Grid2 container spacing={2} sx={{width:"80vw",height:"80vh"}}>
            
                {productEl}
        </Grid2>
    </div>
  )
}


function Product({id,title,price,desc,image,category}) {
    return (
      <Card sx={{ maxWidth: 345, backgroundColor:"#161616" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={image}
          title={title}
          aria-label={title}
        />
        <CardContent>
          <Typography sx={{color:"white",fontWeight:"900"}} gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'gray' }}>
            {desc}
          </Typography>
          <Typography variant="h4" sx={{ color: 'white' }}>
            {category}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Buy</Button>
          <Button size="small">Add to Cart</Button>
        </CardActions>
      </Card>
    );
  }


export default Shop
