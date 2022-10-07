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

            {/* route "/WEB" */}
            <Route exact path="/">
                 <Home />
            </Route>
            <Route exact path="/web/webView">
                 <WebView />
            </Route>


        </Switch>
    )
}

export default Routes