import { Link, NavLink } from "react-router-dom"
import { PiStarFourThin } from "react-icons/pi";

const NavBar = () => {
    return (
        <div className="z-10 backdrop-blur-sm sticky mx-10 scale-0 sm:scale-100 p-0 top-0 justify-center transition-all">
            <div className="flex flex-row justify-center pb-1">
                <NavItem title="Home" link="/MusicA-Portfolio" />
                <NavItem title="Skills" link="/MusicA-Portfolio/skills" />
                <NavItem title="Projects" link="/MusicA-Portfolio/projects" />
                <span className="group flex flex-row p-2 justify-center">
                    <PiStarFourThin className="mt-1.5 group-hover:scale-100 fill-white scale-0" />
                    <button className="font-branch font-semibold text-center text-lg px-2
                                        group-hover:text-white" onClick={toBottom}>Contact</button>
                    <PiStarFourThin className="mt-1.5 group-hover:scale-100 fill-white scale-0" />
                </span>
            </div>
            <hr className="border-black flex mx-10" />
        </div>
    );
};

const toBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, left: 0, behavior: 'smooth' });
};

const NavItem = ({title, link}) => {
    return (
        <span className="group flex flex-row p-2 justify-center">
            <PiStarFourThin className="mt-1.5 group-hover:scale-100 fill-white scale-0" />
            <NavLink className="font-branch font-semibold text-center text-lg px-2
                                group-hover:text-white" to={link}>{title}</NavLink>
            <PiStarFourThin className="mt-1.5 group-hover:scale-100 fill-white scale-0" />
        </span>
    );
};


export default NavBar
