import './nav.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation () {
  return (
     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
       <Navbar.Brand id='logo' href="/">Ginger</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Shop" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#contact-section">Contact us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Book Section
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <button className='btn-first'>Book Now</button>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;