import React from 'react'
import Logo from '../Images/logo.png';
import { Outlet } from 'react-router-dom';

export default function Fulllayout(){
    return(
        <>
        <nav className="bg-gray-900">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
         <img src= {Logo} className='h-14 w-24 ml-5'/>
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">Home</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">About Us</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">Feature</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">Contact Us</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">Log In</a>
            </li>
            <li>
  <a href="#" className="bg-blue-200 hover:bg-blue-200 text-gray-800 px-3 py-2 rounded-full">Sign Up</a>
</li>

          </ul>
        </div>
      </nav>
      <Outlet/>
      </>
    );
}