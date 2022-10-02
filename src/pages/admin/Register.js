/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Register() {
    document.title = "Register Web";

    return(
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
                  <h6 className="fw-bold">Register Akun</h6>
                  <hr />
                </div>

                <form>

                 <label className="mb-1">Full Name</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nama Lengkap"
                    />
                  </div>

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
                    Register{" "}
                  </button>
                </form>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
        </React.Fragment>
    )
}

export default Register;