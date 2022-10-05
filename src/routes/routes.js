//import react router dom
import { Switch, Route } from "react-router-dom";

//import component private routes
import Login from "../pages/admin/Login";
import Home from "../pages/web/Home/Index";
import Register from "../pages/admin/Register";
import Verifikasi from "../pages/admin/verifikasi/Index";

//import component private routes
import PrivateRoute from "./PrivateRoutes";
import Dashboard from "../pages/admin/dashboard";

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
            <Route exact path="/admin/register">
                 <Register />
            </Route>
            <Route exact path="/admin/verifikasi">
                 <Verifikasi />
            </Route>
            <PrivateRoute exact path="/admin/dashboard">
                <Dashboard />
            </PrivateRoute>

            {/* route "/WEB" */}
            <Route exact path="/">
                 <Home />
            </Route>


        </Switch>
    )
}

export default Routes