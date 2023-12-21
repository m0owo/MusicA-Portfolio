import { Link, NavLink } from "react-router-dom"
import { PiStarFourThin } from "react-icons/pi";

const NavBar = () => {
    return (
        <div className="z-10 backdrop-blur-sm sticky mx-10 scale-0 sm:scale-100 p-0 top-0 justify-center transition-all">
            <div className="flex flex-row justify-center pb-1">
                <NavItem title="Home" link="/" />
                <NavItem title="Skills" link="/skills"/>
                <NavItem title="Projects" link="/projects" />
            </div>
            <hr className="border-black flex mx-10" />
        </div>
    );
};

const NavItem = ({title, link}) => {
    return (
        <span className="group flex flex-row p-2 justify-center">
            <PiStarFourThin className="group-hover:scale-100 fill-white scale-0" />
            <NavLink className="font-branch font-semibold text-center text-lg px-2
                                group-hover:text-white" to={link}>{title}</NavLink>
            <PiStarFourThin className="group-hover:scale-100 fill-white scale-0" />
        </span>
    );
};


export default NavBar
