import { NavLink } from "react-router-dom"
import { PiStarFourThin } from "react-icons/pi";
import { motion } from 'framer-motion';

const NavBar = () => {
    return (
        <motion.div className="z-20 backdrop-blur-sm sticky mx-10 scale-0 
                               sm:scale-100 p-0 top-0 justify-center transition-all">
            <div className="flex flex-row justify-center pb-1">
                <motion.div
                    initial={{y : -5, duration: 0.3}}
                    animate={{y:0}}>
                    <NavItem title="Home" link="/MusicA-Portfolio/" />
                </motion.div>
                <motion.div
                    initial={{y : -10, duration: 0.3}}
                    animate={{y:0}}>
                    <NavItem title="Skills" link="/MusicA-Portfolio/skills" />
                </motion.div>
                <motion.div
                    initial={{y : -15, duration: 0.3}}
                    animate={{y:0}}>
                    <NavItem title="Projects" link="/MusicA-Portfolio/projects" />
                </motion.div>
                <motion.div
                    initial={{y : -20, duration: 0.3}}
                    animate={{y:0}}>
                    <span className="group flex flex-row p-2 justify-center">
                        <PiStarFourThin className="mt-1.5 group-hover:scale-100 fill-white scale-0" />
                        <button className="font-branch font-semibold text-center text-lg px-2
                                            group-hover:text-white" onClick={toBottom}>Contact</button>
                        <PiStarFourThin className="mt-1.5 group-hover:scale-100 fill-white scale-0" />
                    </span>
                </motion.div>
            </div>
            <hr className="border-black flex mx-10" />
        </motion.div>
    );
};

const toBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, left: 0, behavior: 'smooth' });
};

const NavItem = ({title, link}) => {
    return (
        <div className="group flex flex-row p-2 justify-center">
            <PiStarFourThin className="mt-1.5 group-hover:scale-100 fill-white scale-0" />
            <NavLink className="font-branch font-semibold text-center text-lg px-2
                                group-hover:text-white" to={link}>{title}</NavLink>
            <PiStarFourThin className="mt-1.5 group-hover:scale-100 fill-white scale-0" />
        </div>
    );
};


export default NavBar
