//import react router dom
import { Switch, Route } from "react-router-dom";

//import component private routes
import Login from "../pages/admin/Login";
import Home from "../pages/web/Home/Index";
import Register from "../pages/admin/Register";

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

            {/* route "/WEB" */}
            <Route exact path="/">
                 <Home />
            </Route>


        </Switch>
    )
}

export default Routes