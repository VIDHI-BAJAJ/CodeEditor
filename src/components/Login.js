import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from './Footer';
import login from '../Images/login.png'

const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Implement your login logic here
      console.log('Email:', email);
      console.log('Password:', password);
    };
    return(
        <>
        <Navbar/>
        <div className='flex flex-col'>
            <h2 className='mt-12 ml-44 text-3xl'>Welcome Back!</h2>
            <p className='mt-5 ml-32 text-xl'>Your Gateway to Endless Opportunities Awaits.</p>
            <img src= {login} className='h-80 w-80 ml-44 mt-12 mb-8'/>
            <div className="absolute top-48 right-60">
                        <div className='bg-white h-96 w-96 rounded-md shadow-md'>
                        <h3 className='mt-5 ml-5 text-xl'>Log In!</h3>
                      <div className='flex flex-col'>
                        <label><h3 className='ml-8 mt-5'>Email:</h3>
                        <input
                      type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="h-9 w-80 mt-3 ml-9 rounded-sm shadow-md bg-gray-100 border border-gray-300"/></label>
                     
                      </div>
                      <div className='flex flex-col'>
                       <label>
                      <div className='flex flex-row'>
                      <h3 className='ml-8 mt-5'>Password:</h3>
                      <h5 className='ml-28 mt-5 text-gray-300'>Forgot Password?</h5>
                      </div>
                      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="h-9 w-80 mt-3 ml-9 rounded-sm shadow-md bg-gray-100 border border-gray-300" />
        </label></div>               
     
      <button onClick={handleLogin}  className="bg-blue-500 text-white mt-12 h-10 w-52 rounded-sm shadow-md ml-20">Login</button>
                            </div>
                            </div>
        </div>
       <Footer/>
        </>
    )
}
export default Login;