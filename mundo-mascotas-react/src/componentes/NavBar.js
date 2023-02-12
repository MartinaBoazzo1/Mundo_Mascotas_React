import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Mundo Mascotas</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/totales">Totales</Nav.Link>
            <NavDropdown title="Listados" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/listadoProductos">Listado Productos</NavDropdown.Item>
              <NavDropdown.Item href="/listadoUsuarios">
                Listado Usuarios
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/lastProduct">
              Ultimo producto creado
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;