
import { useState, useEffect} from "react"
import {Navbar, Container} from "react-bootstrap"

// import svg's: 
import logo from '../assets/img/logo.svg'
import logo from '../assets/img/logo.svg'
import logo from '../assets/img/logo.svg'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home")
    const [scrolled, seScrolled] = useState(false)  // initial state is false
    const onUpdatActiveLink = (value) => {
        setActiveLink(value)
    }
    useEffect ( () => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true)
            }else{
                seScrolled(false)
            }
        }
        window.addEventListener(scrolled,onScroll)
        return () => window.removeEventListener("scroll",onScroll)

    }, [])
    
    return(
        <Navbar bg="light" expand="lg" className= {scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={""} alt="logo"/> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className ={activeLink = "home" ? "active navbar-link" : "navbar-link"} onClick= {() => onUpdatActiveLink('Hhomr')}>Home</Nav.Link>
            <Nav.Link href="#skills" className ={activeLink = "skills" ? "active navbar-link" : "navbar-link"} onClick= {() => onUpdatActiveLink('home')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className ={activeLink = "projects" ? "active navbar-link" : "navbar-link"} onClick= {() => onUpdatActiveLink('home')}>Projects</Nav.Link>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
            <span className="navbar-text">
                <div className="social-icon">
                    <a href=""><img src="" alt=""></img></a>
                    <a href=""><img src="" alt=""></img></a>
                    <a href=""><img src="" alt=""></img></a>
                    <a href=""><img src="" alt=""></img></a>
                </div>
                <button className="vvd" onClick={() => console.log("connect!")}><span className="connect">Let's Connect</span></button>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}