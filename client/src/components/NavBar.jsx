import React, { useState } from 'react'; // Import React and useState hook
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import menu icons
import { NavLink } from 'react-router-dom';


const Navbar = ({ userId, onLogout }) => {
    // State to handle the navbar's open/close status
    const [openNav, setOpenNav] = useState(true);

    // Function to toggle the navbar's visibility
    const ToggleNavBar = () => {
        setOpenNav(!openNav);
    };

    return (
        <>
            {/* Main Navigation Bar */}
            <nav className='bg-slate-200  w-full flex justify-between items-center h-20 mx-auto px-5'>
                
                <h1 className="text-2xl">Logo</h1>
                {/* Desktop Navigation Links */}
                <ul className='hidden md:flex space-x-6 text-xl  font-semibold'>

                   <li className='hover:text-[#006D5B]'> <NavLink to={"/"}> Home </NavLink> </li>
                   <li className='hover:text-[#006D5B]'> <NavLink to={"/about-us"}> Recipes </NavLink> </li>
                    <li className='hover:text-[#006D5B]'><NavLink to={"/contact-us"}> OurBrand</NavLink></li>
                    {/* <li><NavLink to={"/Homelist"}> Homelist </NavLink></li> */}
                   
                </ul>
                
                {/* Desktop Buttons */}
                {userId ? (
                    <>
                    <div className='hidden space-x-4 md:flex'>
                    <button onClick={onLogout} className="bg-red-500 px-4 py-2 rounded">
                      Logout
                    </button>
                    </div>
                  </>
                ) : (
                  <>
                <div className='hidden space-x-4 md:flex'>
                <button className='border border-[#006D5B] text-[#006D5B]  py-2  hover:bg-[#006D5B] hover:text-white px-4 font-bold rounded-md'>Login</button>
                    <button className='border border-[#006D5B] text-[#006D5B] px-4 py-2 hover:bg-[#006D5B] hover:text-white font-bold rounded-md'>Register</button>
                </div>
                </>
          )}
                
                {/* Hamburger Menu Icon for Mobile */}
                <div className='fixed md:hidden right-6' onClick={ToggleNavBar}>
                    {/* Toggle between open and close icons based on openNav state */}
                    {!openNav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>

                {/* Mobile Navigation Menu */}
                <div className={!openNav ? 'left-[0%] fixed top-0 w-[60%] bg-slate-100 h-full block pl-4 pt-4 ease-in-out duration-500 md:hidden' : "fixed left-[100%] ease-in-out duration-500"}>
                    {/* Logo in Mobile Menu */}
                    <h1 className='text-[27px]  font-bold'>logo</h1>
                    
                    {/* Mobile Navigation Links */}
                    <ul className='block pt-8 space-y-4'>
                        <li className='border-b border-[#006D5B]'> <NavLink to={"/"}> Home </NavLink>  </li>
                        <li className='border-b border-[#006D5B]'> <NavLink to={"/about-us"}> About Us </NavLink>  </li>
                        <li className='border-b border-[#006D5B]'> <NavLink to={"/contact-us"}> Contact Us </NavLink> </li>
                        {/* <li className='border-b border-[#006D5B]'> <NavLink to={"/Homelist"}> Homelist </NavLink> </li> */}
                    </ul>
                    
                    {/* Mobile Buttons */}
                    {userId ? (
                    <>
                    <button onClick={onLogout} className="bg-red-500 px-4 py-2 rounded">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <div className='block pt-5 space-y-4'>
                    <NavLink to={'/logIn'}><button className='border border-[#006D5B] hover:bg-[#006D5B] hover:text-white bg-violet-200 w-full py-2 text-[black] font-bold rounded-md block'>Login</button></NavLink>
                    <NavLink to={"/ Registration"}><button className='border border-[#006D5B] hover:bg-[#006D5B] hover:text-white bg-violet-200 w-full py-2 text-[black] font-bold rounded-md'>Register</button></NavLink>
                    </div>
                    </>
          )}
                </div>
            </nav>
        </>
    );
};

export default Navbar; // Export Navbar component