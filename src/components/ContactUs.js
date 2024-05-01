import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import contactus from '../Images/contactus.png'
import tick from '../Images/tick.png'
import FAQ from '../components/FAQ'

import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import Footer from './Footer';


const ContactUs = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "31830077-a1be-4195-a8da-4ed648536391");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };
    return (
        <>
            <Navbar />
            <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${contactus})` }}>
                <div className="">
                    <h1 className="text-white  pl-44 pt-28 text-4xl font-bold">Contact Us <br />and Unleash your idea</h1>
                    <p className='text-white  pl-36 pt-5 text-xl '>Let's start a conversation. Your feedback matters!</p>
                    <div>
                        <div className='flex flex-row'>
                            <img src={tick} className='h-8 w-8 ml-44 mt-7' />
                            <p className='text-white pt-7 pl-2 text-xl '>Elevate Your Collaboration Game with Us!</p>
                        </div>
                        <div className='flex flex-row'>
                            <img src={tick} className='h-8 w-8 ml-44 mt-7' />
                            <p className='text-white pt-7 pl-2 text-xl '>Drop Us a Line and Let the Coding Begin!</p>
                        </div>
                        <div className='flex flex-row'>
                            <img src={tick} className='h-8 w-8 ml-44 mt-7' />
                            <p className='text-white pt-7 pl-2 text-xl '>Let's Craft Brilliant Code Together!</p>
                        </div>
                    </div>
                    <div className="absolute top-24 right-60">
                        <div className='bg-white h-96 w-96 rounded-md shadow-md'>
                            <div className='pt-5 pl-6'>
                            <form onSubmit={onSubmit}>
                             <div className='flex flex-col'>
                             <label>
                             <h5>Name:</h5> 
                             <input type="text"name="name" className="h-9 w-80 mt-3 rounded-sm shadow-md bg-gray-100 border border-gray-300"
/> </label> 
                             </div>
                             <div className='flex flex-col mt-3'>
                             <label>
                             <h5 >Email:</h5> 
                             <input type="email" name="email" className="h-9 w-80 mt-3 rounded-sm shadow-md bg-gray-100 border border-gray-300"/> </label> 
                             </div>
                             <div className='flex flex-col mt-3'>
                                <h5>Message:</h5>
        <textarea name="message" className="h-12 w-80 mt-3 rounded-sm shadow-md bg-gray-100 border border-gray-300"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white mt-12 h-10 w-52 rounded-sm shadow-md ml-16">Submit Form</button>
      </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-12'>
                <FAQ/>
            </div>
            <Footer/>
        </>
    );
}
export default ContactUs;
