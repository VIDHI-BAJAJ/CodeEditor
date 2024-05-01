
import React from "react";
import ItemsContainer from "./ItemContainer";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white">
      <ItemsContainer />
      <div className='bg-black h-12 w-full'>
     <p className='text-center text-white pt-3'>2024@CodeX | All  Right Reserved </p>
</div>
    </footer>
  );
};

export default Footer;

