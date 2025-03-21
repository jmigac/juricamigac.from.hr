import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactGA from "react-ga4";

const handleNavigation = (url, name) => {
    ReactGA.event({
        category: 'Navigation',
        action: 'visited',
        label: name,
    });
}


export default function Navigation({ languageChange }) {

    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/">Jurica</Nav.Link>
                    <Nav.Link href="#experiences">Experiences</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#expertise">Expertise</Nav.Link>
                    <Nav.Link href="https://blog.juricamigac.from.hr" onClick={() => handleNavigation("https://blog.juricamigac.from.hr", "Blog")}>Blog</Nav.Link>
                    <Nav.Item>
                        <Nav.Link>
                            { languageChange }
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}