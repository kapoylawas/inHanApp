/* eslint-disable jsx-a11y/alt-text */
//import react and hook
import Cookies from "js-cookie";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

//import component react bootstrap
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

//import react router dom
import { Link } from "react-router-dom";
import Api from "../../api";


function WebHeader() {

  //token
  const token = Cookies.get("token");

  const dataNip = localStorage.getItem("nip");

  //state user logged in
  const [user, setUser] = useState({});

  const fetchData = async () => {
    await Api.get(
      `/profile?nip_nik=${dataNip.replaceAll('"', "")}&status=${1}`,
      {
        headers: {
          //header Bearer + Token
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => {
      //set data response to state "categories"
      setUser(response.data.data);
    });
  };

  //hook
  useEffect(() => {
    //call function "fetchDataUser"
    if (token) { 
      fetchData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
              
            {token ? (
                <Link
                  to="/admin/dashboard"
                  className="btn btn-md btn-light text-uppercase"
                >
                  <i className="fa fa-user-circle"></i> {user.nama}
                </Link>
              ) : (
                <><Nav>
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
                </Nav></>
              )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default WebHeader;
