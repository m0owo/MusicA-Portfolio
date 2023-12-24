import { useState, useEffect } from 'react';
import NavBar from "../../components/specific/NavBar";
import VerticalDivider from "../../components/global/VerticalDivider";
import ToTopButton from '../../components/specific/ToTopButton';
import { motion } from 'framer-motion'

const Skills = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="w-screen">
            <div className='bg-gradient-to-br from-indigo-200 via-fuchsia-100 to-violet-200 text-center top-0'>
                {/* <SideBar /> */}
                <NavBar />
                <ToTopButton />
                <motion.div className="my-16 flex justify-center font-rosie-brown 
                            text-5xl sm:text-6xl text-[#1d1a4d] transition-all"
                            initial={{opacity:0, transition: {duration: 0.1}}}
                            animate={{opacity:1}}
                            exit={{opacity:0, transition: {duration: 0.1}}}>
                    Skills
                </motion.div>
                <VerticalDivider />
                <div className="my-10 text-center font-branch font-bold text-3xl sm:text-4xl">Programming Languages</div>
                <div className="justify-items-center justify-center m-auto grid grid-cols-2 sm:grid-cols-4 gap-y-5 max-w-6xl">
                    <SkillCard text="Python" pic="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"/>
                    <SkillCard text="Java" pic="https://cdn.freebiesupply.com/logos/large/2x/java-14-logo-png-transparent.png"/>
                    <SkillCard text="C++" pic="https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png" />
                </div>
                <div className="my-10 text-center font-branch font-bold text-3xl sm:text-4xl">Frontend Development</div>
                <div className="justify-items-center justify-center m-auto grid grid-cols-2 sm:grid-cols-4 gap-y-5 max-w-6xl">
                    <SkillCard text="HTML" pic="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png"/>
                    <SkillCard text="JavaScript" pic="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"/>
                    <SkillCard text="CSS" pic="https://diziglobalsolution.com/wp-content/uploads/2023/04/logo-css-3-1536.png"/>
                    <SkillCard text="ReactJS" pic="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" />
                    <SkillCard text="TailwindCSS" pic="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"/>
                </div>
                <VerticalDivider />
                <hr className="border-black border-[0.3px]"/>
                {/* <Contacts /> */}
            </div>
        </div>
    );
};

const SkillCard = ({pic, text}) => {
    return (
        <motion.div className="flex flex-col justify-center m-auto 
                        w-[150px] h-[150px] bg-indigo-100 
                        rounded-xl sm:w-[210px] sm:h-[210px]
                        drop-shadow-lg border-[0.1px] border-[#9e9bd1] gap-6
                        bg-[url('/assets/Images/BG.png')] bg-cover"
                        initial={{x: -5, rotate:-20, duration:0.3}}
                        animate={{x: 0, rotate:0}} >
            <span className="mx-auto my-1"><img src={pic} className="h-10" alt={text} /></span>
            <span className="mx-auto font-flowrise font-bold text-lg sm:text-xl">{text}</span>
        </motion.div>
    );
};

export default Skills;
