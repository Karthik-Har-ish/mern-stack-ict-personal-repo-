import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Counter from "./components/Counter"
import Input from "./components/Input"
import Blog from './components/Blog'
import ApiGet from './components/ApiGet'
import Shop from './components/Shop'

function App() {

  const pathToElement = {
    "/": <Counter/>,
    "/input": <Input/>,
    "/blog": <Blog/>,
    "/people": <ApiGet/>,
    '/shop':<Shop/>
  }

  

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          {
            Object.keys(pathToElement).map((path)=>{
              return (
                <Route key={path} path={path} element={pathToElement[path]}/>
              )
            })
          }
        </Routes>
      </div>
    </>
  )
}

export default App
