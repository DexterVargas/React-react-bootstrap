import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/logo.png';

function NavbarSection() {
	return (
	<>
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">
					<img
					alt=""
					src={logo}
					className="d-inline-block align-top logo"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">About</Nav.Link>
						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Socials</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">
							Web Services
						</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Web Support</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">
							Schedule a Meeting
						</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#notif">🔔<Badge bg="danger">1</Badge></Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	</>
	);
}

export default NavbarSection;
