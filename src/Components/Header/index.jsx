import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar fixed="top" className="" bg="light" expand="lg">
      <Navbar.Brand href="#home">Vega Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About Us</Nav.Link>
          <Nav.Link href="#home">Our Services</Nav.Link>
          <Nav.Link href="#link">Our Work</Nav.Link>
          <Nav.Link href="#home">Book Online</Nav.Link>
          <Nav.Link href="#link">Contact Us</Nav.Link>
          <Nav.Link href="#home">Dashboard</Nav.Link>
          <Nav.Link href="#link">SignIn</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
