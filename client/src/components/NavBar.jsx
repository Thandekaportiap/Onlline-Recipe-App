import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10 mr-4" />
          <div className="hidden md:flex space-x-6 text-gray-800">
            <a href="#" className="hover:text-[#006D5B]">Recipes</a>
            <a href="#" className="hover:text-[#006D5B]">Our Brand</a>
            <a href="#" className="hover:text-[#006D5B]">Add New</a>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="bg-[#006D5B] text-white px-4 py-2 rounded hover:bg-[#005b4f]">
            Log In
          </button>
          <button className="border border-[#006D5B] text-[#006D5B] px-4 py-2 rounded hover:bg-[#006D5B] hover:text-white">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;