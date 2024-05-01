import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from './Footer';
import Room from '../Images/Room.png'

const Joinroom = () =>{
    const [roomCode, setRoomCode] = useState('');
  const [password, setPassword] = useState('');

  const handleJoinRoom = () => {
    console.log('Room Code:', roomCode);
    console.log('Password:', password);
  };
    return(
        <>
        <Navbar/>
                        <div className='bg-blue-200  h-96 w-96 ml-24 mt-12 mb-12 rounded-2xl shadow-md'>
                        <h3 className='pt-12 pl-20 text-xl'>Join Room/Create Room</h3>
  <div className='flex flex-col'>
    <label>
        <h3 className='ml-8 mt-5'>Code:</h3>
    <input
        type="text"
        placeholder="Room Code"
        value={roomCode}
        onChange={(e) => setRoomCode(e.target.value)}
        className="h-9 w-80 mt-3 ml-9 rounded-sm shadow-md bg-gray-100 border border-gray-300"
      />
    </label>
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
        className="h-9 w-80 mt-3 ml-9 rounded-sm shadow-md bg-gray-100 border border-gray-300"
      />
    </label>
   
   </div>
     
      <button onClick={handleJoinRoom}  className="bg-blue-500 text-white mt-12 h-10 w-52 rounded-sm shadow-md ml-20">Join Room</button>
                           
                        <div className='flex flex-col'>
                        <div className="absolute top-44 right-60">
            <img src= {Room} className='h-80 w-80 ml-44 mt-2   mb-8'/>
                            </div>
                            </div>
        </div>
       <Footer/>
        </>
    )
}
export default Joinroom;