import { useState, useEffect } from 'react';
import NavBar from "../../components/specific/NavBar";
import VerticalDivider from "../../components/global/VerticalDivider";
import { motion, AnimatePresence } from 'framer-motion';
import ToTopButton from '../../components/specific/ToTopButton';
import { PiCaretCircleLeftFill } from "react-icons/pi";
import { PiCaretCircleRightFill } from "react-icons/pi"
import { SlSocialGithub } from "react-icons/sl";
import { Player } from 'video-react';


const Projects = () => {
    // pace
    // const P = [
    //     {
    //         id: "P1",
    //         path: "assets/Projects/Pgifs/Clip1.mov"
    //     }
    // ];

    // teagame/supermeowmeow
    const TG = [
        {
            id: "TG1", 
            path: "assets/Projects/TGgifs/Clip1.MOV"
        }
    ];
    
    // fuzzytypers
    const FT = [
        {
            id: "FT1", 
            path: "assets/Projects/FTgifs/1.webp"
        },
        {
            id: "FT2", 
            path: "assets/Projects/FTgifs/2.webp"
        },
        {
            id: "FT3", 
            path: "assets/Projects/FTgifs/3.webp"
        },
        {
            id: "FT4", 
            path: "assets/Projects/FTgifs/4.webp"
        }
    ];

    // calories manager
    const CM = [
        {
            id: "CM1", 
            path: "assets/Projects/CMgifs/1.webp"
        },
        {
            id: "CM2", 
            path: "assets/Projects/CMgifs/2.webp"
        },
        {
            id: "CM3", 
            path: "assets/Projects/CMgifs/3.webp"
        },
    ];

    // edusphere
    const ES = [
        {
            id: "ES1", 
            path: "assets/Projects/ESgifs/1.gif"
        }, 
        {
            id: "ES2" , 
            path: "assets/Projects/ESgifs/2.gif"
        },
        {
            id: "ES3", 
            path: "assets/Projects/ESgifs/3.gif"
        }, 
        {
            id: "ES4" , 
            path: "assets/Projects/ESgifs/4.gif"
        }
    ];

    // meetung
    const MT = [
        {
            id: "MT1", 
            path: "assets/Projects/MTgifs/1.webp"
        },
        {
            id: "MT2", 
            path: "assets/Projects/MTgifs/2.webp"
        },
        {
            id: "MT3", 
            path: "assets/Projects/MTgifs/3.webp"
        },
        {
            id: "MT4", 
            path: "assets/Projects/MTgifs/4.webp"
        }
    ];
    
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="w-full">
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
                    <ProjectCard name="MeeTung" 
                                 technologies="Next.js, Prisma, TypeScript, Tailwind CSS"
                                 description="This project has the objective of helping users manage their budget by tracking
                                              their daily spendings and expenses."
                                 date= "2024"
                                 contributors="Music Auyeung, Kritanat Chorpaga, Peerasawat Yapira, Tripong Khemasurijunyo"
                                 medias={MT} 
                                 github="https://github.com/ZenThaiDev/MeeTung"
                    />
                    {/* <ProjectCard name="Curate" 
                                 technologies="Python(TkInter, Pickle)"
                                 description="This project has the objective of helping beginner users reach their health goals
                                              through the more friendly alternative to exercise, the art of eating. It takes
                                              into account the user's current BMI and adjusts daily goals based on the recommended average and
                                              the user's goal, whether it is to increase, decrease, or maintain body weight/BMI."
                                 date= "2024"
                                 contributors="Music Auyeung, Miki Ajiki, Sirapop Tuntithanakij"
                                 medias={} 
                                 github="https://github.com/m0owo/Curate"
                    /> */}
                    {/* <ProjectCard name="Pace" 
                                 technologies="ReactJS, TailwindCSS, NodeJS, ExpressJS, PostgreSQL"
                                 description="Pace, a project management application in active development, is designed to divide and conquer projects by structuring them 
                                              into tasks. Upcoming features encompass the incorporation of authentication, authorization, and the adept handling of concurrent tasks 
                                              across diverse projects along with collaboration between different users. The frontend is meticulously crafted using ReactJS and TailwindCSS, 
                                              while the backend is orchestrated through an ExpressJS Restful API in NodeJS, seamlessly integrating with the PostgreSQL database."
                                 date="2024"
                                 contributors="Music Auyeung"
                                 medias={P}
                                 github="https://github.com/m0owo/Pace"
                    /> */}
                    <ProjectCard name="EduSphere"
                                 technologies="HTML/CSS, JavaScript, Python(FastApi, ZODB)"
                                 description="Edusphere is a classroom assistance program which serves to improve the learning environment with features such as
                                              assignment management, submissions, scoring, grading, and course-specific discussion forums. The UI is created using HTML/CSS 
                                              and JavaScript whereas the Database and requests are managed using Python's ZODB and FastApi, respectively."
                                 date="2023"
                                 contributors="Music Auyeung, Miki Ajiki, Sirapop Tuntithanakij"
                                 medias={ES}
                                 github="https://github.com/m0owo/SEdu"
                    />
                    <ProjectCard name="Super Meow Meow" 
                                 technologies="Raylib"
                                 description="Participated in a five-person project, Super Meow Meow, by leading the development of the Game UI and Art Design
                                              for a warm and nostalgic game which simulates a tea bar inspired from familiar childhood web games."
                                 contributors="Music Auyeung, Miki Ajiki, Kawin Thimayom, Peerasawat Yapira, Sorawis Chongterdtoonskul"
                                 date="2023"
                                 medias={TG}
                                 github="https://github.com/ZenThaiDev/SuperMeowMeow"
                    />
                    <ProjectCard name="Fuzzy Typers" 
                                 technologies="C++, Raylib"
                                 description="Fuzzy Typers is the fruit of the efforts of a three-person team on a fun and delightful 
                                              adaptation based on the traditional gameplay of typing games. The objective of this game is to 
                                              help users improve their typing speed and accuracy by encouraging practice. It provides three different 
                                              modes of gameplay in order to combine productivity and entertainment."
                                 date="2023"
                                 contributors="Music Auyeung, Miki Ajiki, Sirapop Tuntithanakij"
                                 medias={FT} 
                                 github="https://github.com/Phaitaras/TypingPractice"
                    />
                    <ProjectCard name="Calories Manager" 
                                 technologies="Python(TkInter, Pickle)"
                                 description="This project has the objective of helping beginner users reach their health goals
                                              through the more friendly alternative to exercise, the art of eating. It takes
                                              into account the user's current BMI and adjusts daily goals based on the recommended average and
                                              the user's goal, whether it is to increase, decrease, or maintain body weight/BMI."
                                 date= "2022"
                                 contributors="Music Auyeung"
                                 medias={CM} 
                                 github="https://github.com/m0owo/CaloriesTracker"
                    />
                </div>
                <VerticalDivider />
                <hr className="border-black border-[0.3px]"/>
                {/* <Contacts /> */}
            </div>
        </div>
    );
};

const ProjectCard = ({name, technologies, description, date, contributors, medias, github}) => {
    const [currentMedia, setCurrentMedia] = useState(0);

    const isVideo = (url) => {
        const vidExtensions = ['.MOV', '.mp4', '.mov'];
        return vidExtensions.some((extension) => url.endsWith(extension));
    };

    return (
        <motion.div className="w-[90%] h-[600px] sm:h-[900px] my-20 mx-auto bg-gradient-to-b from-amber-50 via-rose-100 to-violet-200 
                               rounded-3xl border-[hsl(241,73%,84%)] border-solid border-2 flex flex-col p-10 
                               overflow-scroll"
                    initial={{ x:-100, transition: {duration:0.5}}}
                    animate={{ x:0, transition: {duration:0.5} }}>
            <div className="flex flex-col m-auto justify-center text-center break-words w-full">
                <div className="m-auto text-center font-branch text-4xl font-bold
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
                            {
                                medias.map((media, index) => {
                                    if (index == currentMedia) {
                                        return (
                                            isVideo(media.path) ? (
                                                <motion.div
                                                    initial={{ opacity:0, transition: {duration:0.5}}}
                                                    animate={{ opacity:1, transition: {duration:0.5} }}
                                                >
                                                    <Player
                                                        className={`sm:max-w-[400px] md:max-w-[600px] max-w-[200px] 
                                                                    max-h-[150px] sm:max-h-[400px] m-auto border-[#1d1a4d] 
                                                                    border-[1px] transition-all ${(index == currentMedia) ? "visible" : "invisible h-0"}`}
                                                        src={media.path}
                                                        key={name + media.id}
                                                        autoplay={false}
                                                        controls
                                                        fluid={false}
                                                    />
                                                </motion.div>
                                            ) : (
                                                <motion.img
                                                    className={`rounded-3xl m-auto border-gray-400 border-[1px]
                                                                ${(index == currentMedia) ? "visible" : "invisible h-0"}`}
                                                    src={media.path}
                                                    alt={media.id}
                                                    key={media.id}
                                                    initial={{ x:10, opacity: 0, transition: {duration:0.5}}}
                                                    animate={{ x:0, opacity: 1,  transition: {duration:0.5}}}
                                                />
                                            )
                                        )
                                    }
                                })
                            }
                            {/* {
                                isVideo(medias[currentMedia].path) ? (
                                    <motion.div
                                        initial={{ opacity:0, transition: {duration:0.5}}}
                                        animate={{ opacity:1, transition: {duration:0.5} }}
                                    >
                                        <Player
                                            className="sm:max-w-[400px] md:max-w-[600px] max-w-[200px] 
                                                    max-h-[150px] sm:max-h-[400px] m-auto border-[#1d1a4d] 
                                                    border-[1px] transition-all"
                                            src={medias[currentMedia].path}
                                            key={name + currentMedia}
                                            autoplay={false}
                                            controls
                                            fluid={false}
                                        />
                                    </motion.div>
                                ) : (
                                    <motion.img
                                        className="rounded-3xl m-auto border-gray-400 border-[1px]"
                                        src={Array.isArray(medias) && medias.length > 0 ? medias[currentMedia].path : ""}
                                        alt={currentMedia}
                                        key={name + currentMedia}
                                        initial={{ x:10, opacity: 0, transition: {duration:0.5}}}
                                        animate={{ x:0, opacity: 1,  transition: {duration:0.5}}}
                                    />
                                )
                            } */}
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
                                     key={media.id}
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
                    <div className="flex flex-row text-[14px] p-1 mx-9 sm:m-0">
                        <GithubLink link={github} />
                    </div> 
            </div>
        </motion.div>
    );
};

const GithubLink = ({link}) => {
    return (
        <div className='mx-auto mt-2 mb-0 font-helvetica-neue text-xs
                        hover:bg-gray-50 hover:text-[#1d1a4d] bg-black text-white
                        rounded-full w-fit p-2
                        font-semibold transition-all'>
            <a href={link} target="_blank" className='flex flex-row gap-1'>
                <span className='m-auto'><SlSocialGithub/></span>
                <span className='m-auto'>To GitHub</span>
            </a>
        </div>
    );
};



export default Projects;

