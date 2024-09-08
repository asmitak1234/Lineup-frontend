 /* // # <!-- Made By - Asmita Kumari --> */


import React from 'react';
import { Navbar, Container} from 'react-bootstrap';

export default function CustomNavbar({ formContent }) {
    return (
        <Navbar className="mb-2" expand="lg" bg="dark" variant="dark" style={{height:"10vh",}}>
            <Container>
                <Navbar.Brand style={{fontSize:"38px",}}>LineUp</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <form style={{display:"inline",}} onSubmit={e => formContent.onSubmit(e)}>
                            {formContent.content}
                        </form>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}