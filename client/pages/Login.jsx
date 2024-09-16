import React from "react";
import { NavLink } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  return (
<>
<div className="flex items-center justify-center h-screen bg-whitesmoke m-6">
      <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#006D5B]">
      <h1 className="text-3xl font-bold mb-2 text-center">Welcome Back!</h1>
      <p className="text-gray-600 mb-8 text-center">Login Using Your UserName and Password</p>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">Username</label>
          <div className="flex items-center border-b-2 border-[#006D5B]">
            <i className="fas fa-user mr-2 text-[#006D5B]"></i>
            <input 
              type="text" 
              id="username" 
              className="w-full py-2 outline-none" 
              style={{ borderColor: '#006D5B' }} 
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <div className="flex items-center border-b-2 border-[#006D5B]">
            <i className="fas fa-lock mr-2 text-[#006D5B]"></i>
            <input 
              type="password" 
              id="password" 
              className="w-full py-2 outline-none" 
              style={{ borderColor: '#006D5B' }} 
            />
          </div>
        </div>
        <div className="flex items-center mb-6">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe" className="text-gray-700">Remember Me</label>
        </div>
        <button 
          className="w-full py-2 mt-4 bg-[#006D5B] text-whitesmoke font-semibold rounded"
        >
          Login
        </button>
      </div>
    </div>
  
</>
      
  )
};

export default Login;
