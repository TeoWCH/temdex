import React, { EventHandler } from 'react'
import {
	Container,
	Form,
	Nav,
	Navbar as BNavbar,
	NavDropdown
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './../../assets/images/Temtem_logo.png'
import './Navbar.css'

interface props {
	handler?: React.ChangeEventHandler
}

export default function Navbar({ handler = () => {} }: props) {
	return (
		<Container>
			<BNavbar collapseOnSelect expand="lg" variant="dark">
				<Container>
					<Link to="/">
						<img src={logo} style={{width: '150px'}}/>
					</Link>
					<BNavbar.Toggle aria-controls="responsive-navbar-nav" />
					<BNavbar.Collapse
						id="responsive-navbar-nav"
						className="justify-content-end"
					>
						<Form className="d-flex">
							<Form.Control
								onChange={handler}
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
						</Form>
					</BNavbar.Collapse>
				</Container>
			</BNavbar>
		</Container>
	)
}
