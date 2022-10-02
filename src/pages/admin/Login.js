/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

function Login() {
  document.title = "Login Web";

  return (
    <React.Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mt-150">
            <div className="text-center mb-4">
              <img
                src={require("../../assets/images/blitar.png")}
                style={{
                  width: 80,
                  height: 80,
                  marginRight: 10,
                  marginBottom: 12,
                  marginTop: -100,
                }}
              />
              <h4>
                <i className="fa fa-phone"></i> <strong>Blitar In Hand</strong>
              </h4>
            </div>
            <div
              className="card border-2 rounded shadow-sm"
              style={{ flex: 1, backgroundColor: "#e6e6f1" }}
            >
              <div className="card-body">
                <div className="text-center">
                  <h6 className="fw-bold">LOGIN ADMIN</h6>
                  <hr />
                </div>

                <form>
                  <label className="mb-1">EMAIL ADDRESS</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-envelope"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>

                  <label className="mb-1">PASSWORD</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <button
                    className="btn btn-primary shadow-sm rounded-sm px-4 w-100"
                    type="submit"
                  >
                    {" "}
                    Login{" "}
                  </button>
                </form>
                <hr />
              </div>
            </div>
            <div className="text-center mt-3">
              Belum Punyak Akun ?{" "}
              <Link to="/admin/register">
                <a href="">Register !</a>
              </Link>
            </div>
            <hr />
            <button
              className="btn btn-primary shadow-sm rounded-sm px-4 w-100"
              type="submit"
            >
              <i className="fa fa-lock"></i> Login Dengan SSO
            </button>
            <button
              className="btn btn-primary shadow-sm mt-1 rounded-sm px-4 w-100"
              type="submit"
            >
              <i className="fa fa-google-sign-in"></i> Login Dengan Google
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
