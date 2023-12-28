import { PiLinkedinLogoLight } from "react-icons/pi";
import { CiPhone } from "react-icons/ci";
import { SlSocialGithub } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from 'framer-motion';

const Contacts = () => {
    return (
        <motion.div className="p-20 sm:p-10 flex flex-col sm:flex-row h-fit mb-10
                        text-center w-screen bg-white sm:gap-auto justify-center sm:justify-start
                        transition-all"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit = {{opacity : 0 }}>
            <span><p className="w-full m-auto sm:mx-5 sm:mt-10 font-rosie-brown text-3xl 
                                sm:text-6xl text-black text-nowrap text-center">Contact Me</p></span>
            <span className="flex flex-row sm:flex-col sm:text-end 
                             sm:mt-10 sm:gap-6 justify-center sm:justify-start w-full">
                <Contact info="Linkedin"
                         icon={<PiLinkedinLogoLight/>}
                         link="https://www.linkedin.com/in/music-auyeung/" 
                         literal="linkedin.com/in/music-auyeung" />
                <Contact info="Phone" 
                         icon={<CiPhone/>} 
                         literal="(+66) 89-138-1669"/>
                <Contact info="Github"
                         icon={<SlSocialGithub/>} 
                         literal="github.com/m0owo" 
                         link="https://github.com/m0owo" />
                <Contact info="Email" 
                         icon={<AiOutlineMail/>} 
                         literal="mus.auyeung@gmail.com" />

            </span>
        </motion.div>
    );
};

const Contact = ({icon, info, link, literal}) => {
    console.log(link);
    return(
        <div className="text-xs flex flex-row justify-center sm:justify-end sm:mr-60 p-2
                        scale-75 sm:scale-95 hover:scale-100 transition-all">
            <a href={link} className="hover:cursor-pointer flex flex-row whitespace">
                <div className="my-auto mx-1 sm:mx-2 sm:text-lg">{icon}</div>
                <div className="whitespace-nowrap text-[10px] sm:text-sm w-0 scale-0 sm:scale-100 sm:w-100">{literal}</div>
                <div className="m-auto text-[10px] sm:scale-0 sm:w-0">{info}</div>
            </a>
        </div>
    );
};

export default Contacts;
