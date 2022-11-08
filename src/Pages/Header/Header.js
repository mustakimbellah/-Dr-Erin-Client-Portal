import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import headerphoto from '../../Photo/headerphoto.png';
const Header = () => {
    return (
        <Navbar collapseOnSelect className='mb-4 ' expand="lg" bg="info" variant="light">
            <Container>
                <Navbar.Brand className='d-flex '>
                    <img
                        alt="logo"
                        src={headerphoto}
                        width="90"
                        height="90"
                        className="d-inline-block align-top"
                    />
                    <h1 className='p-4 text-light fw-bold'>DR.Erin</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link href="/blog"><Link to={'/blog'} className=' fw-bold'>Blog</Link></Nav.Link>

                    </Nav>
                    <Nav>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;