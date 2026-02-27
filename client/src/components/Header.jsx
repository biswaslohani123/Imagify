import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const {user, setShowLogin} = useContext(AppContext);
    const navigate = useNavigate()

    const onClickHandler = () => {
      if (user) {
        navigate('/result')
      }else{
        setShowLogin(true)
      }
    }

  return (
    <div className="flex flex-col justify-center items-center text-center my-20">
      <div className="text-white inline-flex text-center gap-2 bg-black px-6 py-1 rounded-full border border-neutral-500 transition-all duration-300 ease-out hover:scale-105 hover:border-white">
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="" />
      </div>

      <motion.h1
        className="text-4xl sm:text-7xl text-center mt-10 max-w-[590px] mx-auto"
        animate={{ scale: [1, 1.07, 1], opacity: [1, 0.85, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        Turn text to <span className="text-blue-500">image</span>, in seconds.
      </motion.h1>

      <p className="text-center max-w-xl  mx-auto mt-5 text-gray-500">
        Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen.
      </p>

      <button onClick={onClickHandler} className="sm:text-lg text-white bg-black px-7 py-3 flex justify-center items-center gap-2 rounded-4xl mt-6 cursor-pointer">
        Generate Images <img className="w-5 h-5" src={assets.star_group} alt="" />
      </button>

        <div className="flex flex-wrap justify-center mt-16 gap-3">
            {Array(6).fill('').map((item, index) => 
            
            {
                return <img className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10" src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} alt="" key={index} width={70} />
            })}
        </div>
        <p className="text-gray-500 my-4">Generated images from imagify</p>
    </div>
  );
};

export default Header;
