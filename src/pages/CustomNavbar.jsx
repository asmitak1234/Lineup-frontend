 /* // # <!-- Made By - Asmita Kumari --> */


import React from 'react';
import { Navbar, Container} from 'react-bootstrap';
import '../index.css'

export default function CustomNavbar({ formContent }) {
    return (
        <Navbar className="mb-2" expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand style={{fontSize:"35px",}} className="mx-1">LineUp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id='basic-navbar-nav' className="justify-content-end">
                    <Navbar.Text>
                        <form className='my-2 py-0 px-0 d-inline' style={{display:"inline",}} onSubmit={e => formContent.onSubmit(e)}>{formContent.content} </form> 
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}