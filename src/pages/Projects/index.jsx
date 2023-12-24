import { useState, useEffect } from 'react';
import NavBar from "../../components/specific/NavBar";
import VerticalDivider from "../../components/global/VerticalDivider";
import { motion } from 'framer-motion';
import ToTopButton from '../../components/specific/ToTopButton';
import { PiCaretCircleLeftFill } from "react-icons/pi";
import { PiCaretCircleRightFill } from "react-icons/pi"



const Projects = () => {
    const FT = ["src/assets/Projects/FTgifs/1.gif",
                "src/assets/Projects/FTgifs/2.gif",
                "src/assets/Projects/FTgifs/3.gif",
                "src/assets/Projects/FTgifs/4.gif"]
    
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className='w-screen'>
            {/* <div className="bg-[url('./assets/BG.png')] bg-cover bg-fixed bg-repeat-y"> */}
            <div className='bg-gradient-to-r from-indigo-100 via-violet-100 to-fuchsia-100 text-center'>
                {/* <SideBar /> */}
                <NavBar />
                <ToTopButton />
                <motion.div className="my-16 flex justify-center font-rosie-brown text-5xl 
                                       sm:text-6xl text-[#1d1a4d] transition-all"
                            initial={{opacity:0, transition: {duration: 0.1}}}
                            animate={{opacity:1}}
                            exit={{opacity:0, transition: {duration: 0.1}}}
                >
                    Projects
                </motion.div>
                <VerticalDivider />
                <div className="sm:mx-10">
                    <ProjectCard name="Tea Game" 
                                 technologies="Raylib"
                                 description="Participated in a five-person project and lead the development of the Game UI and Art Design
                                              for a warm and nostalgic game which simulates a tea bar."
                                 contributors="Music Auyeung, Miki Ajiki, Kawin Thimayom, Peerasawat Yapira, Sorawis Chongterdtoonskul"
                                 date="2023"
                                 images={FT} />
                    <ProjectCard name="EduSphere"
                                 technologies="HTML/CSS, JavaScript, Python(FastApi, ZODB)"
                                 description="A classroom assistance program which serves to improve the learning environment with features such as
                                              assignment management, submissions, scoring, grading, and course-specific discussion forums."
                                 date="2023"
                                 contributors="Music Auyeung, Miki Ajiki, Sirapop Tuntithanakij"
                                 images={FT}/>
                    <ProjectCard name="Fuzzy Typers" 
                                 technologies="C++, Raylib"
                                 description="Contributed to a three-person project on the creation of a fun and delightful adaptation of the 
                                              traditional gameplay of typing games. The objective of this game is to help users improve their 
                                              typing skills. It provides three different modes of gameplay that
                                              combine productivity and entertainment."
                                 date="2023"
                                 contributors="Music Auyeung, Miki Ajiki, Sirapop Tuntithanakij"
                                 images={FT} />
                    <ProjectCard name="Calories Manager" 
                                 technologies="Python(TkInter, Pickle)"
                                 description="This project has the objective of helping beginner users reach their health goals
                                              through the more friendly alternative to exercise, the art of eating. It takes
                                              into account the user's current BMI and adjusts daily goals based on the recommended average and
                                              the user's goal, whether it is to increase, decrease, or maintain body weight/BMI."
                                 date= "2022"
                                 contributors="Music Auyeung"
                                 images={FT} />
                </div>
                <VerticalDivider />
                <hr className="border-black border-[0.3px]"/>
                {/* <Contacts /> */}
            </div>
        </div>
    );
};

const ProjectCard = ({name, technologies, description, date, contributors, images}) => {
    console.log(images);
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <motion.div className="h-[600px] my-12 mx-6 sm:m-20 bg-gradient-to-b from-amber-50 via-rose-100 to-violet-200 
                        rounded-3xl border-[hsl(241,73%,84%)] border-solid border-2 flex flex-col p-6 sm:p-10 
                        overflow-scroll"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
            <div className="flex flex-row m-auto justify-center text-center break-words w-full
                            backdrop-blur-sm">
                <div className="m-auto absolute text-center font-branch text-3xl font-bold
                                 sm:text-5xl sm:font-bold z-10 bg-opacity-100"
                >
                    {name}
                </div>

                <div className="group flex flex-col m-auto mt-16 relative z-9 w-full">
                    <motion.div>
                        <PiCaretCircleLeftFill className='absolute left-0 top-1/2 text-xl
                                                        cursor-pointer invisible
                                                        group-hover:visible 
                                                        hover:text-indigo-800 transition-all'
                                            onClick={() => {
                                                    ( currentImage == 0 ) ? setCurrentImage(images.length - 1) : setCurrentImage(currentImage - 1)
                                            }} 
                        />
                        <motion.img
                            className={`rounded-3xl m-auto max-h-[300px] duration-0 border-gray-400 border-[1px]`}
                            src={Array.isArray(images) && images.length > 0 ? images[currentImage] : ""}
                            alt="First Image"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 100 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 500 }} // Adjust the duration as needed
                        />
                        <PiCaretCircleRightFill className='absolute right-0 top-1/2 text-xl
                                                        cursor-pointer invisible
                                                        group-hover:visible transition-all
                                                        hover:text-indigo-800'
                                                onClick={() => {
                                                    ( currentImage == (images.length - 1)) ? setCurrentImage(0) : setCurrentImage(currentImage + 1)
                                                }}
                        />
                    </motion.div>
                    <div className='m-auto my-1'>
                        <div className='m-auto bg-black 
                                        flex flex-row 
                                        h-3 w-10 rounded-md'
                        >
                            {images.map((image, index) => (
                                <div className={`m-auto h-1 w-1 rounded-full ${(index == currentImage) ? "bg-pink-300" : "bg-pink-100"}`}
                                     key={index}
                                     onClick={() => {
                                        setCurrentImage(index)
                                     }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-gray-600 mx-10 mb-2 border-[0.1px]" />
            <div className="flex flex-col m-auto justify-center text-center break-words 
                            ">
                    <div className="flex flex-row justify-center 
                                    font-branch font-bold text-lg mb-1 sm:mb-2 p-1
                                    ">
                        {date}
                    </div>
                    <div className="flex flex-row text-[14px] font-bold justify-center">
                        Technologies: {technologies}
                    </div>
                    <div className="flex flex-row text-[14px] font-bold justify-center">
                        Contributors: {contributors}
                    </div>
                    <div className="flex flex-row text-[14px] p-1 mx-9 sm:m-0">
                        {description}
                    </div> 
            </div>
        </motion.div>
    );
};



export default Projects;
