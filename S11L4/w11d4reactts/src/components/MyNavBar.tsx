import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MyNavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Space Flight News</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to={"/"} className={"nav-link"}>
              Home
            </NavLink>
            <NavLink to={"/articles"} className={"nav-link"}>
              Features
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default MyNavBar;
