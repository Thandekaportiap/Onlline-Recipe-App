import React from 'react'
import './app.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Login from '../pages/Login'
// import Register from '../pages/Register'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
   <BrowserRouter>
   <NavBar/>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route index element={<Login/>} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
