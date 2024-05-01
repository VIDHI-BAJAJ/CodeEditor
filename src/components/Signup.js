import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from './Footer';
import SignUp from '../Images/Signup.png'
const Signup = () =>{
    const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };
    return(
        <>
        <Navbar/>
                        <div className='bg-white  h-96 w-96 ml-24 mt-12 mb-12 rounded-2xl shadow-md'>
                            <h3 className='mt-5 ml-5 text-xl'>Sign Up!</h3>
                            <div className='flex flex-col'>
                        <label><h3 className='ml-8 mt-5'>Username:</h3>
                            <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="h-9 w-80 mt-3 ml-9 rounded-sm shadow-md bg-gray-100 border border-gray-300"
      />
      </label>
      </div>
      <div className='flex flex-col'>
                        <label><h3 className='ml-8 mt-5'>Email:</h3>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-9 w-80 mt-3 ml-9 rounded-sm shadow-md bg-gray-100 border border-gray-300"
      />
      </label>
      </div>
      <div className='flex flex-col'>
                        <label><h3 className='ml-8 mt-5'>Password:</h3>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="h-9 w-80 mt-3 ml-9 rounded-sm shadow-md bg-gray-100 border border-gray-300"
      />
      </label>
      </div>
      <button onClick={handleSignup}className="bg-blue-500 text-white mt-5 h-10 w-52 rounded-sm shadow-md ml-20">Signup</button>
                        <div className='flex flex-col'>
                        <div className="absolute top-20 right-60">
                        <h2 className='mt-24 ml-44 text-3xl'>Create a account !!</h2>
            <p className='mt-5 ml-32 text-xl'>Experience the pleasure of collaborative coding.</p>
            <img src= {SignUp} className='h-80 w-80 ml-44 mt-2  mb-8'/>

                            </div>
                            </div>
        </div>
       <Footer/>
        </>
    )
}
export default Signup;