
import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from "react-scroll";

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { Nav, Navbar, Container, Offcanvas } from 'react-bootstrap';
import logo from './images/logoLB.png';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <BrowserRouter>
    {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 navbar">
          <Container fluid>
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="50"
                height="50"
                className=" logo"
                alt="Lukasz Bis logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Nav.Link as={Link} to="home" offset={-200} smooth={true} duration={300} href="#home">
                  <img
                    src={logo}
                    width="50"
                    height="50"
                    className=" logo"
                    alt="Lukasz Bis logo"
                  />
                </Nav.Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="omnie" smooth={true} duration={300} href="#omnie">O mnie</Nav.Link>
                  <Nav.Link as={Link} to="doswiadczenie" smooth={true} duration={300} href="#doswiadczenie">Doświadczenie</Nav.Link>
                  <Nav.Link as={Link} to="edukacja" smooth={true} duration={300} href="#edukacja">Edukacja</Nav.Link>
                  <Nav.Link as={Link} to="umiejetnosci" smooth={true} duration={300} href='umiejetnosci'>Umiejętności</Nav.Link>
                  <Nav.Link as={Link} to="kontakt" smooth={true} duration={300} href="#kontakt">Kontakt</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      {/* <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="50"
              height="50"
              className=" logo"
              alt="Lukasz Bis logo"
            />
          </Navbar.Brand>
          <Nav>
            
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link href="/contact" >Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
