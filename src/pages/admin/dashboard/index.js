import React from "react";
import LayoutAdmin from "../../../layouts/Admin";

function Dashboard() {
    document.title = "Dashboard Pegawai ";


    return(
        <React.Fragment>
            <LayoutAdmin>
                <h1>HALAMAN DASHBOARD</h1>
            </LayoutAdmin>
        </React.Fragment>
    )
}

export default Dashboard
