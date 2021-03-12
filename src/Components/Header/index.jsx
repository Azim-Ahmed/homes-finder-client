import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';

const Header = () => {
  return (
    <Container fluid>
      <Navbar fixed="top" className="" bg="light" expand="lg">
        <Link href="/">
          <a className="navbar-brand">Vega Home</a>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
            <Link href="#about">
              <a className="nav-link">About Us</a>
            </Link>
            <Link href="#Services">
              <a className="nav-link">Our Services</a>
            </Link>
            <Link href="/">
              <a className="nav-link">Our Work</a>
            </Link>
            <Link href="/">
              <a className="nav-link">Book Online</a>
            </Link>
            <Link href="#contact">
              <a className="nav-link">Contact Us</a>
            </Link>
            <Link href="/dashboard/dashboard">
              <a className="nav-link">Dashboard</a>
            </Link>
            <Link href="/">
              <a className="nav-link">SignIn</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
