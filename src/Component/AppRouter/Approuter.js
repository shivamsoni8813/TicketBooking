import React from 'react'
import { Routes , Route } from 'react-router-dom'
import SignUp from '../Auth/SignUp'
import Login from '../Auth/Login'
import Navbar from '../Navbar/Navbar'
import Home from '../HomePage/Home'
import MainPage from '../MainPage/MainPage'
// import Signup from '../Auth/SignUp'
const Approuter = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/Joinus' element={<SignUp/>}></Route>
        <Route path='/Login' element = {<Login/>}></Route>
        <Route path='/' element ={<MainPage/>}></Route>
      </Routes>
    </div>
  )
}

export default Approuter
