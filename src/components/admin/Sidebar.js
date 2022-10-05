import React from 'react'
import {Link, useLocation} from 'react-router-dom'


function Sidebar() {
    
    const location = useLocation();

    const { pathname } = location;

    const splitLocation = pathname.split("/");

    return(
        <div className="list-group list-group-flush">
                <Link className={splitLocation[2] === "dashboard" ? "list-group-item list-group-item-action list-group-item-lights p-3 text-uppercase active" : "list-group-item list-group-item-action list-group-item-lights p-3 text-uppercase"} to="/admin/dashboard"><i className="fa fa-tachometer-alt me-2"></i> Dashboard</Link>
                <Link className={splitLocation[2] === "categories" ? "list-group-item list-group-item-action list-group-item-lights p-3 text-uppercase active" : "list-group-item list-group-item-action list-group-item-lights p-3 text-uppercase"} to="/admin/categories"><i className="fa fa-folder me-2"></i> Categories</Link>
            </div>
    )
}

export default Sidebar;