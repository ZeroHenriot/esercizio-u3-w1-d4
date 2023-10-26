import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-0">
      <Container fluid className=" bg-dark py-2">
        <Navbar.Brand href="#home" className="text-light">
          Libri fantastici e dove trovarli
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              About
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              Browse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
