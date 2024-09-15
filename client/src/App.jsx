import React from 'react'
import './app.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Login from '../pages/Login'
// import Register from '../pages/Register'


const App = () => {
  return (
    <>
    <NavBar/>
    {/* <Register/> */}
    <h1 className='underline'>hello</h1>
    <Login/>
  <Footer/>
    </>
  )
}

export default App
