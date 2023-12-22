import { useState, useEffect } from 'react';
import NavBar from "../../components/specific/NavBar";
import VerticalDivider from "../../components/global/VerticalDivider";
import Contacts from "../../components/specific/Contacts";
import { PiStarFourThin } from "react-icons/pi";
import { PiStarFourFill } from "react-icons/pi";
import { motion } from 'framer-motion';


const Projects = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);
    return (
        <div className="w-screen">
            <div className="bg-[url('./assets/BG.png')] bg-cover bg-fixed bg-repeat-y ">
                <SideBar />
                <NavBar />
                <ToTopButton />
                <div className="my-10 flex justify-center font-rosie-brown text-4xl sm:text-6xl text-gray-700 transition-all"
                     initial={{opacity:0, transiton: {duration: 0.1}}}
                     animate={{opacity:1}}
                     exit={{opacity:0, transiton: {duration: 0.1}}}>
                    Projects
                </div>
                <VerticalDivider />
                <div className="sm:mx-10">
                    <ProjectCard name="Tea Game" 
                                 technologies="Raylib"
                                 description="Participated in a five-person project and lead the development of the Game UI and Art Design
                                              for a warm and nostalgic game which simulates a tea bar."
                                 contributors="Music Auyeung, Miki Ajiki, Kawin Thimayom, Peerasawat Yapira, Sorawis Chongterdtoonskul"
                                 date="2023" />
                    <ProjectCard name="EduSphere"
                                 technologies="HTML/CSS, JavaScript, Python(FastApi, ZODB)"
                                 description="A classroom assistance program which serves to improve the learning environment with features such as
                                              assignment management, submissions, scoring, grading, and course-specific discussion forums."
                                 date="2023"
                                 contributors="Music Auyeung, Miki Ajiki, Sirapop Tuntithanakij"/>
                    <ProjectCard name="Fuzzy Typers" 
                                 technologies="C++, Raylib"
                                 description="Contributed to a three-person project on the creation of a fun and delightful adaptation of the 
                                              traditional gameplay of typing games. The objective of this game is to help users improve their 
                                              typing skills. It provides three different modes of gameplay that
                                              combine productivity and entertainment."
                                 date="2023"
                                 contributors="Music Auyeung, Miki Ajiki, Sirapop Tuntithanakij"/>
                    <ProjectCard name="Calories Manager" 
                                 technologies="Python(TkInter, Pickle)"
                                 description="This project has the objective of helping beginner users reach their health goals
                                              through the more friendly alternative to exercise, the art of eating. It takes
                                              into account the user's current BMI and adjusts daily goals based on the recommended average and
                                              the user's goal, whether it is to increase, decrease, or maintain body weight/BMI."
                                 date= "2022"
                                 contributors="Music Auyeung"
                                 images={["one", "two", "three"]} />
                </div>
                <VerticalDivider />
                <hr className="border-black border-[0.3px]"/>
                {/* <Contacts /> */}
            </div>
        </div>
    );
};

const ProjectCard = ({name, technologies, description, date, contributors, images}) => {
    return (
        <div className="h-[600px] my-12 mx-6 sm:m-20 bg-gradient-to-b from-amber-50 via-rose-100 to-violet-200 
                        rounded-3xl border-[#b8b7f4] border-solid border-2 flex flex-col sm:flex-row p-6 sm:p-10
                        overflow-auto"
        >
            <div className="m-auto min-w-[50%]">
                <span>Carousel</span>
                {images && Array.isArray(images) && images.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div className="flex flex-col m-auto justify-center text-center sm:text-start break-words">
                <span className="font-branch text-3xl font-bold sm:text-5xl sm:font-bold">{name}</span>
                <span className="flex flex-row justify-center sm:justify-start 
                                 font-branch font-bold text-lg mb-1 sm:mb-2 p-1">
                    {date}
                </span>
                <span className="flex flex-row text-[14px] font-bold sm:justify-start justify-center">
                    Technologies: {technologies}
                </span>
                <span className="flex flex-row text-[14px] font-bold sm:justify-start justify-center">
                    Contributors: {contributors}
                </span>
                <hr className="border-gray-600 mx-10 mb-2 mt-1 border-[0.1px] sm:scale-0" />
                <span className="flex flex-row text-[14px] p-1 mx-9 sm:m-0">
                    {description}
                </span>
            </div>
        </div>
    );
};


export default Projects;
