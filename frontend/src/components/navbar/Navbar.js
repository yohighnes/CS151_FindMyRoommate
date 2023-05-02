import logo from "../../pic/logo.png";
import Container from 'react-bootstrap/Container';
import NavbarBootStrap from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

const Navbar = (props) => {
  if (props.isAuthenticated) {
    return (
      <NavbarBootStrap bg="white" variant="light" style={{ boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)' }}>
        <Container>
          <NavbarBootStrap.Brand href="/">
            <img style={{ height: "50px" }} src={logo} />
          </NavbarBootStrap.Brand>
          <Nav>
            <Nav.Link className="navLink" href="/roommates" ><p className="navBtn">Roommates</p>
            </Nav.Link>
            <Nav.Link className="navLink" href="/profile" ><p className="navBtn">Profile</p>
            </Nav.Link>

            <Nav.Link className="navLink" href="/about"><p className="navBtn">About</p>
            </Nav.Link>

            <Nav.Link className="navLink" href="/contactUs"><p className="navBtn">Contact Us</p>
            </Nav.Link>
          </Nav>
          <Nav >
            <Nav.Link className="navLink" href="/"><p className="navBtn" onClick={() => {localStorage.clear()}}>Sign Out</p></Nav.Link>
          </Nav>
        </Container>
      </NavbarBootStrap>
    );
  } else {
    return (
      <NavbarBootStrap bg="white" variant="light" style={{ boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)' }}>
        <Container>
          <NavbarBootStrap.Brand href="/">
            <img style={{ height: "50px" }} src={logo} />
          </NavbarBootStrap.Brand>
          <Nav>
            <Nav.Link className="navLink" href="/"><p className="navBtn">Home</p>
            </Nav.Link>

            <Nav.Link className="navLink" href="/about"><p className="navBtn">About</p>
            </Nav.Link>

            <Nav.Link className="navLink" href="/contactUs"><p className="navBtn">Contacts Us</p>
            </Nav.Link>
          </Nav>
          <Nav >
            <Nav.Link className="navLink" href="/signup"><p className="navBtn">Sign Up</p></Nav.Link>
            <Nav.Link className="navLink" href="/login"><p className="navBtn">Log In</p></Nav.Link>
          </Nav>
        </Container>
      </NavbarBootStrap>
    );
  }

}

export default Navbar;

