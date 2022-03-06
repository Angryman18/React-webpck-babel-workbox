import React from "react";
import ReactImage from "../images/react-pic.png";

const Home = () => {
  return (
    <div className='h-screen'>
      <div className='flex justify-center items-center h-3/4'>
        <span className='text-2xl my-4'>Congrats! You have successfully installed React customely configured with Webpack, Babel and Workbox for PWA </span>
        {/* <img className="w-96" src={ReactImage} alt="" /> */}
      </div>
    </div>
  );
};

export default Home;
