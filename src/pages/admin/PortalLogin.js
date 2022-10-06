/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

function PortalLogin(params) {
  document.title = "Portal Login Web";

  return (
    <React.Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mt-150">
            <div className="text-center mb-4">
              <Link to="/">
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
              </Link>
              <h4>
                <i className="fa fa-phone"></i> <strong>Blitar In Hand</strong>
              </h4>
            </div>

            <div className="text-center mt-3">
              Belum Punyak Akun ?{" "}
              <Link to="/admin/register">
                <a href="">Register !</a>
              </Link>
            </div>
            <hr />
            <Link to="/admin/login">
              <button
                className="btn btn-primary shadow-sm rounded-sm px-4 w-100"
                type="submit"
              >
                <i className="fa fa-user"></i> Login Sebagai Pegawai
              </button>
            </Link>
            <Link to="/admin/login">
              <button
                className="btn btn-success shadow-sm mt-3 rounded-sm px-4 w-100"
                type="submit"
              >
                <i className="fa fa-user-alt"></i> Login Sebagai Warga
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PortalLogin;
