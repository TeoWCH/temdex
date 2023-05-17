import React from 'react'
import { createRoot } from 'react-dom/client'
import {
	createBrowserRouter,
	Link,
	Navigate,
	RedirectFunction,
	Route,
	RouterProvider
} from 'react-router-dom'
import Dex from './components/Dex/Dex'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const router = createBrowserRouter([
	{
		path: '*',
		element: <Navigate to="/temdex" />
	},
	{
		path: 'temdex',
		element: <Dex />,
	},
	{
		path: 'temdex/:temtemId',
		element: <div></div>
	}
])

createRoot(document.getElementById('root') as HTMLElement).render(
	<RouterProvider router={router} />
)
