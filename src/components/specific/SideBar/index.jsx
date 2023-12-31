import { useState } from 'react';
import { PiStarFourThin } from "react-icons/pi";
import { BsMoonStars } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { IoReorderThree } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import { motion } from "framer-motion";

const SideBar = () => {
    const [expanded, setExpanded] = useState(false);

    const linkClicked = () => {
        setExpanded(curr => !curr);
    };

    function toBottom() {
        window.scrollTo({ top: document.body.scrollHeight, left: 0, behavior: 'smooth' });
        setExpanded(false);

    }

    return (
        <div className={`h-screen border-black bg-transparent backdrop-blur-md sm:scale-0
                        sm:h-0 sm:transition-none fixed z-20 bg-blue-900 bg-opacity-10
                        ${expanded ? "w-[85%] border-black border-r-[1.2px]"
                        : "border-r-0 w-[10%] backdrop-blur-none" } transition-all ease-in-out`}
        >        
            <div className={`justify-center flex p-4 ${expanded ? "" : "h-[50px] w-[70px]"} `}>
                <button className="flex justify-end h-full w-full transition-none"
                        onClick={() => setExpanded((curr) => !curr)}>
                        {expanded ? <TfiClose className='text-xl' /> : <IoReorderThree className='text-[50px]' />}
                </button>
            </div>
            <div className={`h-full flex flex-col mt-5 ${expanded ? "visible" : "invisible" }`}>
                <BsMoonStars className="mx-auto text-lg text-[#1d1a4d]"/>
                <hr className="my-5 mx-40 border-black" />
                <SideBarItem title="Home" link="/MusicA-Portfolio/" onClick={linkClicked} />
                <SideBarItem title="Skills" link="/MusicA-Portfolio/skills" onClick={linkClicked} />
                <SideBarItem title="Projects" link="/MusicA-Portfolio/projects" onClick={linkClicked} />
                <span className="group hover:bg-[#151753] flex flex-row p-2 justify-center">
                    <PiStarFourThin className="mt-1.5 group-hover:scale-100 fill-white scale-0 text-[#1d1a4d]" />
                    <button className="font-branch font-semibold text-center text-lg px-2 text-[#1d1a4d]
                                     group-hover:text-[#EAE4B9]" onClick={toBottom}>Contact</button>
                    <PiStarFourThin className="mt-1.5 group-hover:scale-100 fill-white scale-0 text-[#1d1a4d]" />
                </span>
            </div> 
        </div>
    );
};

const toBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, left: 0, behavior: 'smooth' });
};

const SideBarItem = ({title, link, onClick}) => {
    return (
        <span className={`group hover:bg-[#151753] flex flex-row p-2 
                          justify-center transition-all`}>
            <PiStarFourThin className="mt-1.5 group-hover:scale-100 fill-[#FFFDF0] scale-0" />
            <NavLink className="font-branch font-semibold text-center text-lg px-2 text-[#1d1a4d]
                                group-hover:text-[#EAE4B9]" to={link} onClick={onClick}>{title}</NavLink>
            <PiStarFourThin className="mt-1.5 group-hover:scale-100 fill-[#FFFDF0] scale-0" />
        </span>
    );
};

export default SideBar;
