import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'

function Navigationbar() {
  return (
    <div>
      
<Navbar bg="dark" data-bs-theme="dark">
        
        </Navbar>
        <br />
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="NewTicket">NewTicket</Nav.Link>
              <Nav.Link href="SearchTicket">SearchTicket</Nav.Link>
              <Nav.Link href="ContactUs">ContactUs</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
  
        <br />
    </div>
  )
}

export default Navigationbar