import React from 'react'
import { createRoot } from 'react-dom/client'
import {
	Navigate,
	BrowserRouter,
	Route,
	Routes
} from 'react-router-dom'
import Dex from './components/Dex/Dex'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Temtem from './components/Temtem/Temtem'

createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<Routes>
			<Route path='*' element={<Navigate to='/temdex' />} />
			<Route path='/temdex' element={<Dex />} />
			<Route path='/temdex/:id' element={<Temtem />} />
		</Routes>
	</BrowserRouter>
)
