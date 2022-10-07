/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link, useHistory } from "react-router-dom";
import Api from "../../api";

function Login(props) {
  document.title = "Login Web";

  // STATE LOGIN
  const [nip, setNip] = useState([]);
  const [finger_id, setFingerid] = useState("");
  const [setPlatform] = useState("");

  useEffect(() => {
    localStorage.setItem("nip", JSON.stringify(nip));
  }, [nip]);

  //state loading
  const [isLoading, setLoading] = useState(false);

  //state validation
  const [validation, setValidation] = useState({});

  //history
  const history = useHistory();

  const loginHandler = async (e) => {
    e.preventDefault();

    //set state isLoading to "true"
    setLoading(true);

    await Api.post("/login/pegawai", {
      nip: nip,
      finger_id: finger_id,
      platform: 1,
    })
      .then((response) => {
        //set state isLoading to "false"
        setLoading(false);

        //show toast
        toast.success("Verif Nip Successfully.", {
          duration: 4000,
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });

        Cookies.set("data", response.data.data);

        console.log("response", response);
        //redirect dashboard page
        history.push("/admin/verifikasi");
      })
      .catch((error) => {
        //set state isLoading to "false"
        setLoading(false);

        //set error response validasi to state "validation"
        setValidation(error.response.data);
      });
  };

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
            <div
              className="card border-2 rounded shadow-sm"
              style={{ flex: 1, backgroundColor: "#e6e6f1" }}
            >
              <div className="card-body">
                <div className="text-center">
                  <h6 className="fw-bold">LOGIN ADMIN</h6>
                  <hr />
                </div>

                {validation.msg && (
                  <div className="alert alert-danger">{validation.msg}</div>
                )}

                <form onSubmit={loginHandler}>
                  <label className="mb-1">NIP</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-envelope"></i>
                    </span>
                    <input
                      value={nip}
                      onChange={(e) => setNip(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="NIP"
                    />
                  </div>
                  {validation.nip && (
                    <div className="alert alert-danger">
                      {validation.nip[0]}
                    </div>
                  )}
                  <label className="mb-1">Finger id</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-envelope"></i>
                    </span>
                    <input
                      value={finger_id}
                      onChange={(e) => setFingerid(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Finger id"
                    />
                  </div>
                  {validation.finger_id && (
                    <div className="alert alert-danger">
                      {validation.finger_id[0]}
                    </div>
                  )}
                  <div className="input-group mb-3">
                    <input
                      value={1}
                      onChange={(e) => setPlatform(e.target.value)}
                      type="hidden"
                      className="form-control"
                      placeholder="Finger id"
                    />
                  </div>
                  {validation.platform && (
                    <div className="alert alert-danger">
                      {validation.platform[0]}
                    </div>
                  )}
                  <button
                    className="btn btn-success shadow-sm rounded-sm px-4 w-100"
                    type="submit"
                    disabled={isLoading}
                  >
                    {" "}
                    {isLoading ? "LOADING..." : "SUBMIT"}{" "}
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
