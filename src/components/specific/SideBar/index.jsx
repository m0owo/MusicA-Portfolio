import { useState } from 'react';
import { PiStarFourThin } from "react-icons/pi";
import { BsMoonStars } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { IoReorderThree } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import { motion } from "framer-motion";

const SideBar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={`h-screen border-black border-r-[1.2px]
                        bg-transparent backdrop-blur-md sm:scale-0
                        sm:h-0 sm:transition-none fixed z-20 bg-blue-900 bg-opacity-10
                        ${expanded ? "w-[85%] border-black border-r-[1.2px]"
                        : "border-r-0 w-[10%] backdrop-blur-0" } transition-all`}
        >        
            <div className={`p-4`}>
                <button className="flex mr-6 justify-end w-full transition-none"
                        onClick={() => setExpanded((curr) => !curr)}>
                        {expanded ? <TfiClose className='text-xl' /> : <IoReorderThree className='text-[40px]' />}
                </button>
            </div>
            <div className={`h-full flex flex-col mt-5 ${expanded ? "visible" : "invisible" }`}>
                <BsMoonStars className="mx-auto my-5 text-lg"/>
                <hr className="mt-5 mx-40 border-black" />
                <SideBarItem title="Home" link="/MusicA-Portfolio/" />
                <SideBarItem title="Projects" link="/MusicA-Portfolio/projects" />
                <SideBarItem title="Skills" link="/MusicA-Portfolio/skills" />
            </div> 
        </div>
    );
};

const SideBarItem = ({title, link}) => {
    return (
        <span className={`group hover:bg-[#151753] flex flex-row p-2 justify-center`}>
            <PiStarFourThin className="mt-1.5 group-hover:scale-100 fill-[#FFFDF0] scale-0" />
            <NavLink className="font-branch font-semibold text-center text-lg px-2
                                group-hover:text-[#EAE4B9]" to={link}>{title}</NavLink>
            <PiStarFourThin className="mt-1.5 group-hover:scale-100 fill-[#FFFDF0] scale-0" />
        </span>
    );
};

export default SideBar;
