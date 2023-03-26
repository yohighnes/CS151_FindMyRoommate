import logo from "../../pic/logo.png";
import Container from 'react-bootstrap/Container';
import NavbarBootStrap from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navbar() {

    return (
        <NavbarBootStrap bg="white" variant="light" style={{boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)'}}>
        <Container>
          <NavbarBootStrap.Brand href="#home">
          <img style={{height: "50px"}} src={logo}/>
          </NavbarBootStrap.Brand>
          <Nav>
            <Nav.Link href="#home"  style={{paddingRight: '50px'}}>Home</Nav.Link>
            <Nav.Link href="#about"  style={{paddingRight: '50px'}}>About</Nav.Link>
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
          </Nav>
          <Nav >
            <Nav.Link href="#signup" style={{paddingRight: '30px'}}>Sign Up</Nav.Link>
            <Nav.Link href="#login">Log In</Nav.Link>
          </Nav>
        </Container>
      </NavbarBootStrap>
    );

    
}

export default Navbar;

