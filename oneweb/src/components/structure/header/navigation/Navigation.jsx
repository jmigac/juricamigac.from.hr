import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/">Jurica</Nav.Link>
                    <Nav.Link href="#experiences">Experiences</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#expertise">Expertise</Nav.Link>
                    <Nav.Link href="https://blog.juricamigac.from.hr">Blog</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}