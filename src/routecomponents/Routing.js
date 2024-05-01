import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../components/Homepage';
import AboutUs from '../components/AboutUs';
import Joinroom from '../components/Joinroom';
import Feature from '../components/Feature';
import ContactUs from '../components/ContactUs';
import Login from '../components/Login';
import SignUp from '../components/Signup';



function Routing() {
    return (
        <>
        <Routes>
            {/* <Route path="/" element={<Fulllayout />}> */}
                <Route path="Homepage" element={<Homepage />} />
                <Route path="AboutUs" element={<AboutUs />} />
                <Route path="Joinroom" element={<Joinroom />} />
                <Route path="Feature" element={<Feature />} />
                <Route path="ContactUs" element={<ContactUs />} />
                <Route path="Login" element={<Login />} />
                <Route path="SignUp" element={<SignUp />} />
                {/* <Route path="Room" element={<Room />} /> */}
           
        </Routes>
        </>
    );
}

export default Routing;
