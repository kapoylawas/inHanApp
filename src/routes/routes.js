//import react router dom
import { Switch, Route } from "react-router-dom";

//import component private routes
import PortalLogin from "../pages/admin/PortalLogin";
import Login from "../pages/admin/Login";
import Home from "../pages/web/Home/Index";
import Register from "../pages/admin/Register";
import Verifikasi from "../pages/admin/verifikasi/Index";
import VerifikasiUmum from "../pages/admin/verifikasiUmum/Index";

//import component private routes
import PrivateRoute from "./PrivateRoutes";
import Dashboard from "../pages/admin/dashboard";
import LoginUmum from "../pages/admin/LoginUmum";
import WebView from "../pages/web/webView/Index";
import Pengaduan from "../pages/admin/pengaduan/Index";
import Ppid from "../pages/web/ppid/Index";
import Blikosda from "../pages/web/blikosda/Index";
import Ulpim from "../pages/web/ulpim/Index";
import FormPermohonan from "../pages/web/ppid/FormPermohonan";
import TandaTrima from "../pages/web/ppid/TandaTrima";

//=======================================================================
//WEB
//=======================================================================

function Routes() {
    return (
        
        <Switch>

             {/* route "/admin/login" */}
            <Route exact path="/admin/login">
                <Login /> 
            </Route>
            <Route exact path="/admin/loginUmum">
                <LoginUmum /> 
            </Route>
             <Route exact path="/admin/portal">
                <PortalLogin /> 
            </Route>
            <Route exact path="/admin/register">
                 <Register />
            </Route>
            <Route exact path="/admin/verifikasi">
                 <Verifikasi />
            </Route>
            <Route exact path="/admin/verifikasiUmum">
                 <VerifikasiUmum />
            </Route>
            <PrivateRoute exact path="/admin/dashboard">
                <Dashboard />
            </PrivateRoute>
            <PrivateRoute exact path="/admin/pengaduan">
                <Pengaduan />
            </PrivateRoute>

            {/* route "/WEB" */}
            <Route exact path="/">
                 <Home />
            </Route>
            <Route exact path="/web/webView">
                 <WebView />
            </Route>
            <Route exact path="/web/ppid">
                 <Ppid />
            </Route>
            <Route exact path="/web/blikosda">
                 <Blikosda />
            </Route>
            <Route exact path="/web/ulpim">
                 <Ulpim />
            </Route>
            <Route exact path="/web/formPermohonan/:id">
                 <FormPermohonan />
            </Route>
            <Route exact path="/web/tandaTrima">
                 <TandaTrima />
            </Route>


        </Switch>
    )
}

export default Routes