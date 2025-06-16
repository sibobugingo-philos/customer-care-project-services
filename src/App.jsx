import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from'./Components/Home'
import About from'./Components/About'
import Services from'./Components/Services'
import Product from './Components/Product'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
const App = () => {
  return (
    <>
     <BrowserRouter>
    <Navbar/>
     <Routes>
     <Route path='/'element={<Home/>}/> 
     <Route path='/about'element={<About/>}/> 
     <Route path='/services'element={<Services/>}/> 
     <Route path='/product'element={<Product/>}/>
     <Route path='/contact'element={<Contact/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
      
    </>
  )
}

export default App
