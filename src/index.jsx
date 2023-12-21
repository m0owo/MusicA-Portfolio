import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home'
import Skills from './pages/Skills';
import Projects from './pages/Projects';

const ToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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
			<RouterProvider router={router}/>
)
