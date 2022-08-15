import {useState, useEffect} from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import imgRightArrow from "../assets/img/arrow-1-2@2x.svg";

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar className={scrolled ? "scrolled" : ""}>
            <Container id={'navBar'}>
                <Navbar.Brand href="/">
                    <span id={'logo-text'}>S</span>
                </Navbar.Brand>
                <Navbar.Collapse id="navbar-elements">
                    <Nav className="nav-list">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#about"
                                  className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
                                      onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                        <Nav.Link href="#innovation"
                                  className={activeLink === 'innovation' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => onUpdateActiveLink('innovation')}>Innovation</Nav.Link>
                        <Nav.Link href="#contact"
                                  className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>

                    </Nav>
                    <span className="navbar-text">
                          <a href={'#'}>
                           <span>Sign-in</span>
                              <img src={imgRightArrow} id={'imgRightArrow'} alt={''}/>
                          </a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
