import { PiStarFourFill } from "react-icons/pi";
import { PiStarFourThin } from "react-icons/pi";

const WindowFrame = () => {
    return (
        <div className="transition-all ease-linear">
            <div className="relative w-[201px] h-[300px]
                        rounded-t-[50%] sm:mt-10 m-auto
                        transition-all border-[1px] sm:w-[300px] sm:h-[450px]
                        border-black transparent"
            >
                <div className="relative w-[201px] h-[300px]
                        sm:w-[300px] sm:h-[450px]   
                        rounded-t-[50%] ml-1 mt-0.5 m-auto
                        transition-all border-[1px]
                        border-black transparent"
                >
                    <div className="w-[201px] h-[300px] ml-1 sm:w-[300px] sm:h-[450px]
                            rounded-t-[50%] bg-[url('/assets/Images/PIC1.jpg')]
                            mt-0.5 transition-all border-[1px]
                            border-gray-700 bg-contain bg-left-bottom z-10"
                    >
                        <PiStarFourFill className="fill-[#0a063d]" />
                    </div>       
                    <PiStarFourFill className="w-5 mt-[1px] ml-[220px] sm:ml-[320px] fill-[#0a063d]"/> 
                    <PiStarFourThin className="w-6 ml-[205px] sm:ml-[300px]"/>
                </div>       
            </div>
        </div>
    )
}

export default WindowFrame
