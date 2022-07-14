import React from "react";
import ReactImage from "../images/react-pic.png";

const Home = () => {
  return (
    <div className='mt-40'>
      <div className='flex justify-center flex-col items-center h-3/4'>
        <span className='text-2xl my-4 text-center'>
          React with Webpack and Babel Setup is Complete
        </span>
        <span>Commit on 10-03-2021, 10:56 AM</span>
        <img className='w-[500px] h-[300px] object-center object-cover' src={ReactImage} alt='' />
      </div>
    </div>
  );
};

export default Home;
