import React, { useContext } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import headerphoto from '../../Photo/headerphoto.png';
import { AuthContext } from '../../contexts/AuthProvider';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

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

                        <Nav.Link href="/"><Link to={'/'} className=' fw-bold'>Home</Link></Nav.Link>


                        <Nav.Link href="/blog"><Link to={'/blog'} className=' fw-bold'>Blog</Link></Nav.Link>



                    </Nav>
                    <Nav>
                        {
                            !user?.uid ?
                                <Nav.Link href="#deets" ><Link className='fw-bold' to={'/login'}>Login</Link></Nav.Link>
                                :
                                <>
                                    <Nav.Link href="#dets"><Link className='fw-bold' onClick={handleLogOut}>LogOut</Link></Nav.Link>
                                    <OverlayTrigger
                                        key='bottom'
                                        placement='bottom'
                                        overlay={
                                            <Tooltip id={`tooltip-bottom`}>
                                                <strong>{user?.displayName}</strong>.
                                            </Tooltip>
                                        }
                                    >
                                        <img
                                            alt="logo"
                                            src={user?.photoURL}
                                            width="50"
                                            height="50"
                                            className="d-inline-block align-top rounded-circle m-1"
                                        />
                                    </OverlayTrigger>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;