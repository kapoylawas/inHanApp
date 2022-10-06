/* eslint-disable jsx-a11y/alt-text */
//import react and hook
import React from "react";

//import component react bootstrap
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

//import react router dom
import { Link } from "react-router-dom";

function WebHeader() {
  return (
    <React.Fragment>
      {/* <Navbar collapseOnSelect expand="lg" className="navbar-custom shadow-sm" fixed="top"> */}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold text-white">
              <img
                src={require("../../assets/images/blitar.png")}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title={
                  <span>
                    <i className="fa fa-list-ul"></i> Kategori
                  </span>
                }
                id="collasible-nav-dropdown"
                className="fw-bold text-white"
              >
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/posts/direction">
                  LIHAT LAINNYA <i className="fa fa-long-arrow-alt-right"></i>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {/* <Nav.Link className="fw-bold text-white me-4"><i className="fa fa-search"></i> SEARCH</Nav.Link> */}
              {/* <Link to="/admin/login" className="btn btn-md btn-warning"><i className="fa fa-lock"></i> LOGIN</Link> */}
              <Link to="/admin/portal">
                <Button className="btnregister" variant="outline-light">
                  <i className="fa fa-lock"></i> login
                </Button>
              </Link>
            </Nav>
            <Nav className="btnregister">
              <Link to="/admin/register">
                <Button className="btnregister btn btn-md btn-light">
                  <i className="fa fa-user"></i> Register
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default WebHeader;
