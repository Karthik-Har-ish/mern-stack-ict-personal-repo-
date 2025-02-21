import React from 'react'
import { Typography } from '@mui/material'
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Routes, Route } from "react-router-dom"
import Shop from "./components/Shop"
import AddProduct from "./components/AddProduct"
import "./App.css"

const App = () => {
  return (
    <div>
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/shop" element=<Shop/> />
        <Route path="/product-add" element=<AddProduct/> />
      </Routes>
    </div>
  )
}

export default App
