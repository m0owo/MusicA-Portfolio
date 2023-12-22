import { useState, useEffect } from 'react';
import NavBar from "../../components/specific/NavBar";
import WindowFrame from "../../components/specific/WindowFrame";
import VerticalDivider from "../../components/global/VerticalDivider";
import Contacts from "../../components/specific/Contacts";
import SideBar from '../../components/specific/SideBar';
import { motion } from "framer-motion";
import ToTopButton from '../../components/specific/ToTopButton';

const Home = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);
    
    return (
        <div className="w-screen">
            <div className="text-center bg-[url('./assets/BG.png')] bg-cover bg-fixed bg-repeat-y top-0">
                <SideBar />
                <NavBar />
                <ToTopButton />
                <div className="flex flex-col sm:flex-row justify-center m-auto sm:mx-14" >
                    {/* <WindowFrame /> also change sm:text-cemter below to text-start*/}
                    <motion.div className="mt-20 font-rosie-brown text-5xl sm:text-7xl sm:text-center sm:mx-auto"
                                initial={{opacity:0, transiton: {duration: 0.1}}}
                                animate={{opacity:1}}
                                exit={{opacity:0, transiton: {duration: 0.1}}}>
                        <div className="flex flex-col text-[#0a063d]">
                            <p>Music</p>
                            <p>Auyeung<span className="text-gray-100 text-3xl">'s</span></p>
                            <p className="text-gray-100 text-3xl">Portfolio</p>
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
