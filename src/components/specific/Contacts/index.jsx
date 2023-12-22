import { PiLinkedinLogoLight } from "react-icons/pi";
import { CiPhone } from "react-icons/ci";
import { SlSocialGithub } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";

const Contacts = () => {
    return (
        <div className="p-20 sm:p-10 flex flex-col sm:flex-row justify-start h-fit mb-10
                        text-center w-screen bg-white sm:gap-auto">
            <span><p className="w-full sm:mx-6 font-rosie-brown text-3xl mt-8 
                                sm:text-4xl text-black text-nowrap text-center">Contact Me</p></span>
            <span className="flex flex-row sm:flex-col sm:justify-start 
                             sm:mt-10 sm:gap-6 justify-center w-full">
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
        </div>
    );
};

const Contact = ({icon, info, link, literal}) => {
    console.log(link);
    return(
        <div className="text-xs flex flex-row justify-center p-2">
            <a href={link} className="hover:cursor-pointer flex flex-row whitespace">
                <span className="my-auto mx-1">{icon}</span>
                <span className="whitespace-nowrap text-[10px] w-0 scale-0 sm:scale-100 sm:w-100">{literal}</span>
                <span className="m-auto text-[10px] sm:scale-0 sm:w-0">{info}</span>
            </a>
        </div>
    );
};

export default Contacts;
