//import React
import React, { useState } from 'react';
//import component bootstrap
import { NavDropdown } from 'react-bootstrap';
//import Sidebar
import Sidebar from '../components/admin/Sidebar';
//hook link
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { toast } from 'react-hot-toast';

const LayoutAdmin =({children}) =>{ 

    //state toggle
    const [sidebarToggle, setSidebarToggle] = useState(false);

    //history
    const history = useHistory();

    //function toggle hanlder
    const sidebarToggleHandler = (e) => {
        e.preventDefault();

        if(!sidebarToggle) {
            //add class on body
            document.body.classList.add('sb-sidenav-toggled');

            //set state "sidebarToggle" to true
            setSidebarToggle(true);
        } else {

            //remove class on body
            document.body.classList.remove('sb-sidenav-toggled');

            //set state "sidebarToggle" to false
            setSidebarToggle(false);
        }
    }

    const logoutHandler = async (e) => {
    
            //remove token
            Cookies.remove('token');

            //show toast
            toast.success("Logout Successfully.", {
                duration: 4000,
                position: "top-right",
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });

            //redirect login page
            history.push('/admin/login');
    }

    return(
        <React.Fragment>
            <div className="d-flex sb-sidenav-toggled" id="wrapper">
            <div className="bg-nav" id="sidebar-wrapper">
                <div className="sidebar-heading bg-lights text-center"><i className="fa fa-user"></i> <strong></strong> <small>User</small></div>
                <Sidebar />
            </div>
            <div id="page-content-wrapper">
                <nav className="navbar navbar-expand-lg navbar-light bg-lights">
                    <div className="container-fluid">
                        <button className="btn btn-success-dark" onClick={sidebarToggleHandler}><i className="fa fa-list-ul"></i></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <NavDropdown title="BUDI" className="fw-bold" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/" target="_blank"><i className="fa fa-external-link-alt me-2"></i> Visit Web</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logoutHandler}><i className="fa fa-sign-out-alt me-2"></i> Logout</NavDropdown.Item>
                            </NavDropdown>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid">
                    {children}
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default LayoutAdmin;