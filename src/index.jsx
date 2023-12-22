import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
	createBrowserRouter,
	RouterProvider,
	BrowserRouter as Router,
} from "react-router-dom";
import Contacts from './components/specific/Contacts';
import AnimatedRoutes from './components/specific/AnimatedRoutes'
import SideBar from './components/specific/SideBar';

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: (
// 			<>
// 				<Home />
// 				<ToTop />
// 			</>
// 		),
// 	},
// 	{
// 		path: "/MusicA-Portfolio/",
// 		element: (
// 			<>
// 				<Home />
// 				<ToTop />
// 			</>
// 		),
// 	},
// 	{
// 		path: "/skills",
// 		element: (
// 			<>
// 				<Skills />
// 				<ToTop />
// 			</>
// 		),
// 	},
// 	{
// 		path: "/projects",
// 		element: (
// 			<>
// 				<Projects />
// 				<ToTop />
// 			</>
// 		),
// 	},
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
	// <RouterProvider router={router}/>
	<Router>
		<SideBar />
		<AnimatedRoutes />
		<Contacts />
	</Router>
)
