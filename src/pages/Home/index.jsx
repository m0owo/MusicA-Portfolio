import { useState, useEffect } from 'react';
import NavBar from "../../components/specific/NavBar";
import WindowFrame from "../../components/specific/WindowFrame";
import VerticalDivider from "../../components/global/VerticalDivider";
import { motion } from "framer-motion";
import ToTopButton from '../../components/specific/ToTopButton';

const Home = () => {
    const startDate = new Date(2022, 6, 1);
    const curDate = new Date();
    const schoolYear = Math.ceil((curDate - startDate) / (1000 * 60 * 60 * 24 * 365));
    const [year, setYear] = useState(schoolYear);

    useEffect(() => {
        if (schoolYear === 1) {
        setYear("1st");
        } else if (schoolYear === 2) {
        setYear("2nd");
        } else if (schoolYear === 3) {
        setYear("3rd");
        } else if (schoolYear === 4) {
        setYear("4th");
        } else if (schoolYear > 4) {
        setYear("");
        }
    }, [schoolYear]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    
    return (
        <div className="w-full">
            {/* i changed the folder to the bg */}
            <div className='bg-gradient-to-b from-indigo-200 via-pink-100 to-violet-100
                            text-center'>
                {/* <SideBar /> */}
                <NavBar />
                <ToTopButton />
                <div className="flex flex-col sm:flex-row justify-center m-auto sm:mx-14" >
                    {/* <WindowFrame /> */}
                    <motion.div className="mt-20 font-rosie-brown text-5xl sm:text-7xl sm:text-center sm:mx-auto"
                                initial={{opacity:0, transition: {duration: 0.1}}}
                                animate={{opacity:1}}
                                exit={{opacity:0, transition: {duration: 0.1}}}>
                        <div className="flex flex-col text-[#1d1a4d]">
                            <p>Music</p>
                            <p>Auyeung<span className="text-white text-3xl">'s</span></p>
                            <p className="text-white text-3xl">Portfolio</p>
                        </div>
                    </motion.div>
                </div>
                <VerticalDivider />
                <div className="mt-9 mb-[50px] font-helvetica-neue font-semibold text-gray-700 text-xs sm:text-sm mx-[75px]">
                    <p>{year} Year Student <a href="https://www.kmitl.ac.th/" 
                                           target="_blank"
                                           className="text-[#8187e2] hover:text-[#4b5099]
                                                      transition-all">@KMITL</a></p>
                    <p>Pursuing Bachelor's Degree in <a href="https://www.se.kmitl.ac.th/" 
                                                        target='_blank' 
                                                        className="text-[#8187e2] hover:text-[#4b5099]
                                                                   transition-all"
                                                     >
                                                        Software Engineering
                                                     </a>
                    </p>
                </div>
                <VerticalDivider />
                <hr className="border-black border-[0.3px]"/>
                {/* <Contacts /> */}
            </div>
        </div>
    );
};


export default Home;
