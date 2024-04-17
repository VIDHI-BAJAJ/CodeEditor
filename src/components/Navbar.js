import React, { useState } from 'react';
import Logo from '../Images/logo.png';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/16/solid';

const Navbar = () => {
    let Links = [
        { name: "Home", link: "/Homepage" },
        { name: "About", link: "/AboutUs" },
        { name: "Join Room", link: "/Joinroom" },
        { name: "Features", link: "/Feature" },
        { name: "ContactUs", link: "/ContactUs" },
        { name: "Login", link: "/Login" }
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-gray-900 py-4 md:px-10 px-7'>
                <div>
                    <img src={Logo} alt='CodeX' className='h-14 w-24'></img>
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon className='text-white' /> : <Bars3BottomRightIcon className='text-white' />
                    }
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
                                <a href={link.link} className='text-white duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                    <li className='md:ml-8 font-semibold'>
                        <a href="/SignUp" className='btn bg-blue-200 text-black px-3 py-1 rounded duration-500 md:static'>SignUp</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
