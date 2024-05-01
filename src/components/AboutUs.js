import React from 'react';
import Navbar from "../components/Navbar";
import Footer from './Footer';
import AboutImg from '../Images/aboutimg.png'
import AboutImg1 from '../Images/aboutimg1.png'
const HomePage = () =>{
    return(
        <>
        <Navbar/>
        <div className='flex flex-col mt-12'>
        <h1 className='ml-44 mt-12 text-4xl	'>About Us </h1>
   <p className='text-justify mt-5 ml-12 mb-32 text-2xl'> "We are a team dedicated to advancing the field of software<br/> 
   development by creating innovative tools and solutions that empower <br/>
    teams to collaborate effectively and produce high-quality code.<br/> 
    With a focus on cutting-edge technologies and a passion for improving <br/>
    the developer experience, we strive to push the boundaries <br/> 
    of what is possible in the realm of collaborative programming."
   </p>
   <img src={AboutImg} alt='main' className='h-80 absolute top-40 right-32 rounded'/>
      </div>
      <div className='bg-blue-200 h-52 mx-28 mb-24'>
       <h2 className='text-3xl text-center mt-2 pt-10'>Our Vision</h2>
       <p className='text-justify mt-5 ml-12 mb-32 text-xl mr-12'>Our vision is to revolutionize the way software is developed by fostering a culture of seamless collaboration and innovation. We envision a future where teams can work together effortlessly, regardless of geographical barriers, to build complex and robust software systems that drive progress and innovation in various domains</p>
      </div>
      <div className='h-fit'>
      <h2 className='ml-44 mt-12 text-2xl'>Our Values</h2>
      <div className='flex flex-row'>
      <div className='h-32 w-70 bg-gray-100 rounded shadow-md  mt-12 ml-12'>
        <p className='text-justify ml-9 text-md mr-9'>
            <h5 className='ml-16 text-xl pt-2'>Collaboration</h5>
            We believe in the power of teamwork <br/>and collaboration. By working together, <br/>we can achieve greater results<br/> than by working alone.
        </p>
        </div>
        <div className='h-32 w-70 bg-gray-100 rounded shadow-md  mt-12 ml-12'>
        <p className='text-justify ml-9 text-md mr-9'>
            <h5 className='ml-16 text-xl pt-2'>Innovation</h5>
            We are committed to pushing the boundaries <br/> of what is possible in software development. <br/>We constantly strive to innovate and improve <br/>upon existing solutions.
        </p>
        </div>
      </div>
      <div className=' flex flex-row mt-5 '>
      <div className='h-32 w-70 bg-gray-100 rounded shadow-md  mt-12 ml-12'>
        <p className='text-justify ml-9 text-md mr-9'>
            <h5 className='ml-16 text-xl pt-2'>Quality</h5>
            We are dedicated to delivering high-<br/>quality products that meet the needs and <br/>expectations of our users.
        </p>
        </div>
        <div className='h-32 w-46 bg-gray-100 rounded shadow-md mt-12 ml-12'>
        <p className='text-justify ml-5 text-md mr-5'>
            <h5 className='ml-24 text-xl pt-2'>Transparency</h5>
            We believe in being transparent and open in our <br/> communication and decision-making processes.<br/>We value honesty and integrity<br/> in all our interactions.
        </p>
        </div>
        </div>
    {/* <img src={AboutImg1} alt='main' className='h-96 absolute top-96 mt-96 right-0 rounded' /> */}
      </div>
      <div className='mb-12'></div>
       <Footer/>
        </>
    )
}
export default HomePage;