import Navbar from './components/Navbar'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Info from './components/Info'
import Table from './components/TableElement'
import Hello from './components/hello'
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Hello/>}></Route>
        <Route path='/login' element={<Login/>} />
        <Route path='/info' element={<Info/>} />
        <Route path='/table' element={<Table/>} />
      </Routes>
    </>
  )
}

export default App
