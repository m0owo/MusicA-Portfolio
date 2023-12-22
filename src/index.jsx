import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import {
	createBrowserRouter,
	RouterProvider,
	BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './index.css'
import Home from './pages/Home'
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import NavBar from './components/specific/NavBar';
import Contacts from './components/specific/Contacts';

const ToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

const ToBottom = () => {
	window.scrollTo({bottom:0, left:0, behavior:'smooth'})
};

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Home />
				<ToTop />
			</>
		),
	},
	{
		path: "/MusicA-Portfolio/",
		element: (
			<>
				<Home />
				<ToTop />
			</>
		),
	},
	{
		path: "/skills",
		element: (
			<>
				<Skills />
				<ToTop />
			</>
		),
	},
	{
		path: "/projects",
		element: (
			<>
				<Projects />
				<ToTop />
			</>
		),
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	// <RouterProvider router={router}/>
	<Router>
			<Routes>
				<Route path='/' element={<><Home/><toTop/></>} />
				<Route path='/MusicA-Portfolio' element={<><Home/><toTop/></>} />
				<Route path='/skills' element={<><Skills /><toTop/></>} />
				<Route path='/projects' element={<><Projects /><toTop/></>} />
				<Route path='/contacts' element={<ToBottom/>} />
			</Routes>
		<Contacts />
	</Router>
)
