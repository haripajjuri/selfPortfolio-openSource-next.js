"use client"

import React, { useEffect,useState } from 'react';
import bg from "../../public/homeBg.png"
import porfolio from "../../public/anitha.png"
import { IoArrowForwardCircle } from "react-icons/io5";
import MobileNavbar from '@/components/NavbarMobile';


const Home = () => {

  const [dynamicWidth, setDynamicWidth] = useState(0)
  useEffect(() => {
    // Access window object here
    console.log(window.innerWidth)
    setDynamicWidth(window.innerWidth);
  }, []); // Empty dependency array ensures that this effect runs only once after mount


  const backgroundImageStyle = {
    backgroundImage: `url(${bg.src})`,
  };

return(

    <div
      className="flex flex-col  md:flex-row justify-between w-100 items-center h-screen w-screen bg-black md:bg-hero overflow-x-hidden">
        
        <MobileNavbar/>

        <div className="bg-gray-900 md:h-[500px] md:w-[500px]  h-[200px] w-[200px] mt-[20px] md:mt-[30px] rounded-full md:rounded-3xl ml-8 shadow-2xl mb-4 md:mb-0 shadow-gray-900">
          <img className="h-[200px] w-[200px] md:h-[500px] md:w-[750px] rounded-full md:rounded-2xl" src={porfolio.src} alt="myself"/> 
        </div>
        <div className="flex flex-col justify-start md:justify-center items-center w-[200px] h-screen md:w-[900px] md:h-[600px] p-2 md:p-0">
          <h1 className="text-white md:text-yellow-400 font-bold text-[25px] md:text-[40px] ">&#x2010;   &nbsp; I'M ANITHA.</h1>
          <p className="text-white font-bold text-[18px] md:text-[35px] mb-1">WEB DEVELOPER</p>
          <p className=" text-white mt-3 mb-2 md:mb-6 text-center font-light text-sm  w-screen md:w-[500px]">I’m developer and problem solver from India with high passion of creating softwares That looks and works great. I am passionate about the solving the real world problems ensuring all the possible testcases.</p>
          <button  className="text-white border-2 border-yellow-400 rounded-2xl p-3 flex justify-center items-center" type="button">Know More About Me <span><IoArrowForwardCircle className="ml-2 h-[30px] w-[30px] text-yellow-400"/></span></button>
        </div>
    </div>
  )
}


export default Home