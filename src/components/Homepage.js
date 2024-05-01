import React from 'react';
import Navbar from "../components/Navbar";
import arrow from '../Images/arrow.png'
import home1 from '../Images/home1.png'
import Footer from './Footer';
import { Flex, Progress } from 'antd';


const HomePage = () =>{
    return(
        <>
        <Navbar/>
       <div className='flex flex-col mt-32'>
        <h1 className='ml-28 mt-12 text-3xl	 font-bold'>Unleash Innovation Together!!</h1>
      <p className='ml-40 text-2xl font-semibold'>Your Gateway to Seamless <br/></p>
      <p className='ml-44 text-2xl font-semibold'>Collaborative Coding!</p>
      <div className='flex flex-row'>
        <img src= {arrow} alt='arrow' className='h-32 w-32 mt-2 ml-72'/>
        <p className='text-justify mt-28 ml-5'>
    "With our robust collaboration platform, you can <br/>
    cultivate highly effective teams, fostering deep <br/>
    engagement and driving immediate improvements<br/> 
    in productivity and employee  retention."
   </p>
   <img src={home1} alt='main' className='h-80  absolute top-40 right-24'/>
      </div>
       </div>
       <div className='bg-blue-200 h-60 w-full mt-24'>
       </div>
       <div className='bg-white h-96 w-full'>
       <div className='flex flex-row mt-12 ml-32 '>
        <h2 className='text-3xl font-semibold'>Connect all your favourite <br/>
       tools,just in one platform</h2>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mt-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
      </svg>
       <p className='text-justify  text-xl ml-96'>
        Stay focused on your work with seamless<br/> 
       integration within codeX, eliminating <br/>
        interruptions and distractions.</p>
       </div>
       </div>
       <div className='bg-blue-200 h-60 w-full mt-24'>
        <div className='flex flex-row'>
        <div>
        <h2 className='text-justify text-3xl ml-12 pt-12 pr-12'>
        Here’s what our customers  <br/>experienced
 after implementing <br/>software
        </h2>
        <hr className='w-96 ml-12 mt-5 border-black' />
        </div>
          <div className="flex justify-end mr-32 bottom-24">
      <div className="flex gap-4 mt-10">
        <Progress
          type="circle"
          percent={90}
          strokeColor="#000000"
          format={(percent) => (
            <>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '24px' }}>{percent}%</span>
                <p style={{ fontSize: '16px' }}>Increasing Collaboration</p>
              </div>
            </>
          )}
          strokeWidth={10}
          width={150} 
          className='h-32 mr-12 '
        />
         <Progress
          type="circle"
          percent={80}
          strokeColor="#000000"
          format={(percent) => (
            <>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '24px' }}>{percent}%</span>
                <p style={{ fontSize: '16px'}}>Improving Engagement</p>
              </div>
            </>
          )}
          strokeWidth={10} 
          width={150} 
          className='h-32 mr-12'
        />
        <Progress
          type="circle"
          percent={70}
          strokeColor="#000000"
          format={(percent) => (
            <>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '24px' }}>{percent}%</span>
                <p style={{ fontSize: '16px' }}>Meeting Reduction</p>
              </div>
            </>
          )}
          strokeWidth={10} 
          width={150} 
          className='h-32 mr-12'
        />
      </div>
    </div>
    </div>
       </div>
<Footer/>
        </>
    )
}
export default HomePage;