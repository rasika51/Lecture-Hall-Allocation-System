import "./navBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import susl from "../../Images/SUSL_logo.png";

const NavbarCom = () => {
  return (
    <>
          <Navbar collapseOnSelect expand="lg" className="bar" style={{ backgroundColor: "rgb(50.2%, 0%, 0%)", color: "white" }}>
        <Container>
          <Navbar.Brand
            href="#home"
            className="name"
            style={{color:"white", fontSize:"30px"}}
          >
            <b>SUSL</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="24"
              height="24"
              color="white"
            >
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
            </svg>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#student"
                style={{ color: "white" }}
              >
                Students
              </Nav.Link>
              <Nav.Link
                href="#lecturer"
                style={{ color: "white" }}
              >
                Lecturer
              </Nav.Link>
              <Nav.Link
                href="#staff"
                style={{ color: "white" }}
              >
                Staff
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
  }

  export default NavbarCom;