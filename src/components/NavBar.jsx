import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import "../css/NavBar.css"
import useThemeStore from "../store/ThemeStore";
import { FaSun, FaMoon } from "react-icons/fa"; // Iconos

const NavBar = () => {
  const { theme, toggleTheme } = useThemeStore(); // Obtiene el estado y función

  return (
    <Navbar expand="lg" className={`custom-navbar ${theme}`}>
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutMe" className="nav-link">Acerca de Mi</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-link">Proyectos</Nav.Link>
          </Nav>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;