import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from './logo.webp'
import './navbar.css'
import { Link } from "react-router-dom";

function NavbarWeb() {
  return (
    <Navbar className='navBar' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        
        <Navbar.Brand href="#home" >
            <div id='home'>
            <img src={img}></img>
            <span>Earthly</span></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
                <Link to={""}>Home</Link>
                </Nav.Link>
               <Nav.Link eventKey={2} >
                <Link to={"about"}>About Us </Link>
                
            </Nav.Link>
            <Nav.Link eventKey={2}>
                <Link to="shop">
              Shop
              </Link>
            </Nav.Link>
         
            <Nav.Link eventKey={2} href="#memes">
                <Link to={"contact"}>Contact</Link>
             
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarWeb;