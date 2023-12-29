import { useState, useEffect } from 'react';
import NavBar from "../../components/specific/NavBar";
import WindowFrame from "../../components/specific/WindowFrame";
import VerticalDivider from "../../components/global/VerticalDivider";
import { motion } from "framer-motion";
import ToTopButton from '../../components/specific/ToTopButton';

const Home = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    
    return (
        <div className="w-screen">
            {/* i changed the folder to the bg */}
            <div className='bg-gradient-to-b from-indigo-200 via-pink-100 to-violet-100
                            text-center'>
                {/* <SideBar /> */}
                <NavBar />
                <ToTopButton />
                <div className="mt-20 sm:mt-10 flex flex-col md:flex-row justify-center mx-auto" >
                    <motion.div className="m-auto md:mr-0 
                                           transition-all">
                        <WindowFrame />
                    </motion.div>
                    <motion.div className="mt-10 md:mt-20 sm:m-auto font-rosie-brown text-5xl 
                                           sm:text-7xl text-center sm:text-start sm:mx-auto
                                           transition-all md:text-8xl"
                                initial={{opacity:0, transition: {duration: 0.1}}}
                                animate={{opacity:1}}
                                exit={{opacity:0, transition: {duration: 0.1}}}
                    >
                        <div className="flex flex-col sm:ml-0 text-[#1d1a4d] transition-all
                                        sm:my-40">
                            <p>Music</p>
                            <p>Auyeung<span className="text-white text-3xl">'s</span></p>
                            <p className="text-white text-3xl">Portfolio</p>
                        </div>
                    </motion.div>
                </div>
                <VerticalDivider />
                <div className="mt-9 mb-[50px] font-helvetica-neue font-semibold text-gray-700 text-xs sm:text-sm mx-[75px]">
                    <p>2nd Year Student <span className="text-[#8187e2]">@KMITL</span></p>
                    <p>Pursuing Bachelor's Degree in <span className="text-[#8187e2]">Software Engineering</span></p>
                </div>
                <VerticalDivider />
                <hr className="border-black border-[0.3px]"/>
                {/* <Contacts /> */}
            </div>
        </div>
    );
};


export default Home;
