import {
	Route,
    Routes,
	useLocation,
} from "react-router-dom";
import Home from "../../../pages/Home/index.jsx"
import Skills from "../../../pages/Skills/index.jsx"
import Projects from "../../../pages/Projects/index.jsx"
import { AnimatePresence } from 'framer-motion'

// const ToTop = () => {
//     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
// };

// const ToBottom = () => {
// 	window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth',});
// };

const ToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<><Home/><ToTop/></>} />
                <Route path='/MusicA-Portfolio' element={<><Home/><ToTop/></>} />
                <Route path='/MusicA-Portfolio/skills' element={<><Skills /><ToTop/></>} />
                <Route path='/MusicA-Portfolio/projects' element={<><Projects /><ToTop/></>} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;
