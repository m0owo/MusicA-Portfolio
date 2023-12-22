import { FaArrowAltCircleUp } from "react-icons/fa";
import { useState } from 'react';

const ToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

const ToTopButton = () => {
    const [scrolled, setScrolled] = useState(false);

    useState(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            setScrolled(isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
    });

    return (
        <button className={`text-2xl text-indigo-900 fixed bottom-4 right-4 ${scrolled ? 'visible' : 'invisible'}`} 
                onClick={ToTop}>
                    <FaArrowAltCircleUp />
        </button>
    );
};

export default ToTopButton;
