import { useState, useEffect } from 'react';
import NavBar from "../../components/specific/NavBar";
import VerticalDivider from "../../components/global/VerticalDivider";
import { motion, AnimatePresence } from 'framer-motion';
import ToTopButton from '../../components/specific/ToTopButton';
import { PiCaretCircleLeftFill } from "react-icons/pi";
import { PiCaretCircleRightFill } from "react-icons/pi"
import { Player } from 'video-react';

const Projects = () => {
    const FT = [
        "assets/Projects/FTgifs/1.webp",
        "assets/Projects/FTgifs/2.webp",
        "assets/Projects/FTgifs/3.webp",
        "assets/Projects/FTgifs/4.webp"
    ];
      
    const ES = [
        "./assets/Projects/ESgifs/Clip1.mov",
        "./assets/Projects/ESgifs/Clip2.mov",
        // "./assets/Projects/ESgifs/1.gif",
        // "./assets/Projects/ESgifs/2.gif",
        // "./assets/Projects/ESgifs/3.gif",
        // "./assets/Projects/ESgifs/4.gif",
    ];
      
    
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="w-screen">
            <div className='bg-gradient-to-bl from-pink-100 via-indigo-100 to-violet-100 text-center'>
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
                {/* <img src="./assets/Projects/FTgifs/2.gif" alt="2" />
                <img src="assets/Projects/FTgifs/3.gif" alt="4" /> */}

                <VerticalDivider />
                
                <div className="sm:mx-10">
                    {/* <ProjectCard name="Super Meow Meow" 
                                 technologies="Raylib"
                                 description="Participated in a five-person project and lead the development of the Game UI and Art Design
                                              for a warm and nostalgic game simulates a tea bar inspired from traditional childhood web games."
                                 contributors="Music Auyeung, Miki Ajiki, Kawin Thimayom, Peerasawat Yapira, Sorawis Chongterdtoonskul"
                                 date="2023"
                                 medias={FT}
                    /> */}
                    <ProjectCard name="EduSphere"
                                 technologies="HTML/CSS, JavaScript, Python(FastApi, ZODB)"
                                 description="A classroom assistance program which serves to improve the learning environment with features such as
                                              assignment management, submissions, scoring, grading, and course-specific discussion forums."
                                 date="2023"
                                 contributors="Music Auyeung, Miki Ajiki, Sirapop Tuntithanakij"
                                 medias={ES}
                                 demo={"src/assets/Projects/ESgifs/Clip1.mov"}/>
                    <ProjectCard name="Fuzzy Typers" 
                                 technologies="C++, Raylib"
                                 description="Contributed to a three-person project on the creation of a fun and delightful adaptation of the 
                                              traditional gameplay of typing games. The objective of this game is to help users improve their 
                                              typing skills. It provides three different modes of gameplay that
                                              combine productivity and entertainment."
                                 date="2023"
                                 contributors="Music Auyeung, Miki Ajiki, Sirapop Tuntithanakij"
                                 medias={FT} />
                    {/* <ProjectCard name="Calories Manager" 
                                 technologies="Python(TkInter, Pickle)"
                                 description="This project has the objective of helping beginner users reach their health goals
                                              through the more friendly alternative to exercise, the art of eating. It takes
                                              into account the user's current BMI and adjusts daily goals based on the recommended average and
                                              the user's goal, whether it is to increase, decrease, or maintain body weight/BMI."
                                 date= "2022"
                                 contributors="Music Auyeung"
                                 medias={FT} /> */}
                </div>
                <VerticalDivider />
                <hr className="border-black border-[0.3px]"/>
                {/* <Contacts /> */}
            </div>
        </div>
    );
};

const ProjectCard = ({name, technologies, description, date, contributors, medias}) => {
    const [currentMedia, setCurrentMedia] = useState(0);
    const isVideo = (url) => {
        const vidExtensions = ['.mov', '.mp4'];
        return vidExtensions.some((extension) => url.endsWith(extension));
      };
    return (
        <motion.div className="h-[600px] sm:h-[900px] my-12 mx-6 sm:m-20 bg-gradient-to-b from-amber-50 via-rose-100 to-violet-200 
                        rounded-3xl border-[hsl(241,73%,84%)] border-solid border-2 flex flex-col p-10 
                        overflow-scroll"
                        initial={{ x:-100, transition: {duration:0.5}}}
                        animate={{ x:0, transition: {duration:0.5} }}>
            <div className="flex flex-col m-auto justify-center text-center break-words w-full
                            backdrop-blur-sm">
                <div className="m-auto aboslute text-center font-branch text-4xl font-bold
                                sm:text-5xl sm:font-bold z-10 bg-opacity-100"
                >
                    {name}
                </div>
                <div className="group flex flex-col m-auto mt-16 relative z-9 w-full">
                    <AnimatePresence>
                        <PiCaretCircleLeftFill className='absolute left-0 top-[40%] text-5xl
                                                        cursor-pointer invisible
                                                        group-hover:visible sm:text-6xl
                                                        hover:text-indigo-800 z-10'
                                            onClick={() => {
                                                    ( currentMedia == 0 ) ? setCurrentMedia(medias.length - 1) : setCurrentMedia(currentMedia - 1)
                                            }} 
                        />
                        {isVideo(medias[currentMedia]) ? (
                            <motion.div>
                                <Player
                                    className="sm:max-w-[400px] md:max-w-[480px] max-w-[300px] max-h-[400px] m-auto border-[#1d1a4d] border-[1px]"
                                    src={medias[currentMedia]}
                                    key={currentMedia}
                                    autoplay={false}
                                    controls
                                    fluid={false}
                                    initial={{ opacity:0, transition: {duration:0.5}}}
                                    animate={{ opacity:1, transition: {duration:0.5} }}
                                />
                            </motion.div>
                        ) : (
                            <motion.img
                                className="rounded-3xl m-auto border-gray-400 border-[1px]"
                                src={Array.isArray(medias) && medias.length > 0 ? medias[currentMedia] : 'public/assets/Projects/ESgifs/Clip1.mov'}
                                alt={currentMedia}
                                key={currentMedia}
                                initial={{ x:10, opacity: 0, transition: {duration:0.5}}}
                                animate={{ x:0, opacity: 1,  transition: {duration:0.5}}}
                            />
                        )}
                        <PiCaretCircleRightFill className='absolute right-0 top-[40%] text-5xl
                                                        cursor-pointer invisible
                                                        group-hover:visible sm:text-6xl
                                                        hover:text-indigo-800 z-10'
                                                onClick={() => {
                                                    ( currentMedia == (medias.length - 1)) ? setCurrentMedia(0) : setCurrentMedia(currentMedia + 1)
                                                }}
                        />
                    </AnimatePresence>
                    <div className='m-auto my-1'>
                        <div className='m-auto bg-black 
                                        flex flex-row gap-2
                                        h-[8px] p-3 rounded-2xl'
                        >
                            {medias.map((media, index) => (
                                <div className={`m-auto h-[6px] w-[6px] rounded-full ${(index == currentMedia) ? "bg-pink-300" : "bg-pink-100"}`}
                                     key={index}
                                     onClick={() => {
                                        setCurrentMedia(index)
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

