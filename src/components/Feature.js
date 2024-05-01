import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'; 
import features from '../Images/features.png'
import Security from '../Images/Security.png'
import Scalability from '../Images/Scalability.png'
import Feedback from '../Images/Feedback.png'

const HomePage = () =>{
    return(
        <>
        <Navbar/>
        <div className='bg-blue-200 h-80'>
        <h2 className='ml-72 pt-32 text-3xl'>Feature</h2>
        <p className='ml-48 text-xl'>The feature set of our collaborative code <br/> editor is designed to streamline teamwork <br/> and elevate the programming experience.</p>
        <img src={features} alt='main' className='h-80 absolute top-28 right-32'/>
        <p className='mt-5'></p>
        <Link to="#" className='btn bg-blue-900 w-72 h-64 text-white px-3 py-1 ml-72 mt-96 text-xl rounded duration-500 md:static'>Let’s Start</Link> 
        </div>
       <div>
       <div className='flex flex-row'>
        <div className='h-72 w-72 bg-gray-100 rounded shadow-md  mt-12 ml-44'>
            <img src= {Scalability} alt='Scalability' className='h-24 w-32 ml-16 mt-5'/> 
        <h5 className='ml-20 text-xl pt-2'>Scalability</h5>
            <p className='text-justify text-md px-5 mt-5'>Ensure that your system is designed to scale effectively, especially if you anticipate a large number of users or a significant increase in usage over time. </p>
        </div>
        <div className='h-72 w-72 bg-gray-100 rounded shadow-md  mt-12 ml-16'>
            <img src= {Security} alt='Security' className='h-24 w-32 ml-20 mt-5'/> 
        <h5 className='ml-28 text-xl pt-2'>Security</h5>
            <p className='text-justify text-md px-5 mt-5'>Highlight the security measures implemented in your collaborative code editor, such as encryption for data transmission. </p>
        </div>
        <div className='h-72 w-72 bg-gray-100 rounded shadow-md  mt-12 ml-16'>
            <img src= {Feedback} alt='Feedback' className='h-24 w-32 ml-16 mt-5'/> 
        <h5 className='ml-20 text-xl pt-2'>Feedback</h5>
            <p className='text-justify text-md px-5 mt-5'> Implement a feedback  to gather input from users and incorporate their suggestions for improving the collaborative code editor. </p>
        </div>
       </div>
      </div>
      <div className='flex flex-row'>
      <div className='h-36 w-70 bg-gray-100 rounded shadow-md  mt-12 ml-60 '>
        <p className='text-justify ml-9 text-md mr-9'>
            <h5 className='ml-16 text-xl pt-2'>Customization</h5>
            Provide options for users to customize their <br/>editing environment according to their preferences.<br/> This could include customizable themes, <br/> key bindings,and plug-in support <br/> for additional functionality.
        </p>
        </div>
        <div className='h-36 w-70 bg-gray-100 rounded shadow-md  mt-12 ml-12 '>
        <p className='text-justify ml-9 text-md mr-9'>
            <h5 className='ml-16 text-xl pt-2'>Integration</h5>
            Explore integration with popular development tools <br/> and platforms to enhance interoperability. <br/> This could involve integrations with issue trackers, <br/> continuous integration systems, and project <br/> management tools.
        </p>
        </div>
      </div>
      <div className='flex flex-row'>
      <div className='h-36 w-70 bg-gray-100 rounded shadow-md  mt-12 ml-60 mb-12'>
        <p className='text-justify ml-9 text-md mr-9'>
            <h5 className='ml-16 text-xl pt-2'>Documentation and Support</h5>
            We believe in the power of teamwork <br/>and collaboration. By working together, <br/>we can achieve greater results<br/> than by working alone.
        </p>
        </div>
        <div className='h-36 w-96 bg-gray-100 rounded shadow-md  mt-12 ml-24 '>
        <p className='text-justify ml-9 text-md mr-9'>
            <h5 className='ml-16 text-xl pt-2'>Offline Mode</h5>
            We are committed to pushing the boundaries  of what is possible in software development. We constantly strive to innovate and improve upon existing solutions.
        </p>
        </div>
      </div>
    <Footer/>  
        </>
    )
}
export default HomePage;