import React from "react";
import ReactImage from "../images/react-pic.png";

const Home = () => {
  return (
    <div className=''>
      <div className='flex justify-center flex-col items-center h-3/4'>
        <span className='text-2xl my-4 text-center z-10 text-white'>
          React with Webpack and Babel Setup is Complete
        </span>
        <img className='w-full object-center object-cover h-full absolute top-0 left-0 right-0 bottom-0' src={ReactImage} alt='' />
      </div>
    </div>
  );
};

export default Home;
