import NavBar from "../../components/specific/NavBar"
import VerticalDivider from "../../components/global/VerticalDivider"
import Contacts from "../../components/specific/Contacts"

const Skills = () => {
    return (
        <div className="h-fit w-screen">
            <div className="bg-[url('./assets/BG.png')] bg-cover bg-fixed bg-repeat-y">
                <NavBar />
                <div className="my-10  flex justify-center font-rosie-brown text-4xl sm:text-6xl text-gray-700 transition-all">
                    Skills
                </div>
                <VerticalDivider />
                <div className="my-10 text-center font-branch font-bold text-3xl sm:text-4xl">Programming Languages</div>
                <div className="justify-items-center justify-center m-auto grid grid-cols-2 sm:grid-cols-4 gap-y-5 max-w-4xl">
                    <SkillCard text="Python" pic="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"/>
                    <SkillCard text="Java" pic="https://cdn.freebiesupply.com/logos/large/2x/java-14-logo-png-transparent.png"/>
                    <SkillCard text="C++" pic="https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png" />
                </div>
                <div className="my-10 text-center font-branch font-bold text-3xl sm:text-4xl">Frontend Development</div>
                <div className="justify-items-center justify-center m-auto grid grid-cols-2 sm:grid-cols-4 gap-y-5 max-w-4xl">
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
    )
}

const SkillCard = ({pic, text}) => {
    return (
        <div className="flex flex-col justify-center m-auto w-[150px] h-[150px] bg-indigo-100 rounded-xl 
                        drop-shadow-md border-[0.2px]">
            <span className="mx-auto my-1"><img src={pic} className="h-10" alt={text} /></span>
            <span className="mx-auto font-flowrise">{text}</span>
        </div>
    )
}

export default Skills
