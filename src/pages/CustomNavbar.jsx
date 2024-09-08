 /* // # <!-- Made By - Asmita Kumari --> */


import React from 'react';
import { Navbar, Container} from 'react-bootstrap';

export default function CustomNavbar({ formContent }) {
    return (
        <Navbar className="mb-2" expand="lg" bg="dark" variant="dark" style={{height:"10vh",}}>
            <Container>
                <Navbar.Brand style={{fontSize:"38px",}}><strong className="mx-1">LineUp</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id='basic-navbar-nav' className="justify-content-end">
                    <Navbar.Text>
                        <form className='my-2 d-inline' style={{display:"inline",}} onSubmit={e => formContent.onSubmit(e)}>
                            {formContent.content}
                        </form>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}