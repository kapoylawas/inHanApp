/* eslint-disable jsx-a11y/alt-text */
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useHistory } from "react-router-dom";
import Api from "../../api";

function LoginUmum() {
    document.title = "Login Umum";

    // STATE LOGIN
    const [nik, setNik] = useState([])
    const [no_kk, setNokk] = useState("")

    useEffect(() => {
        localStorage.setItem("nik", JSON.stringify(nik));
      }, [nik]);

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
    
        await Api.post("/login/umum", {
          nik: nik,
          no_kk: no_kk,
          platform: 1,
        })
          .then((response) => {
            //set state isLoading to "false"
            setLoading(false);
    
            //show toast
            toast.success("Verif Nik Successfully.", {
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
            history.push("/admin/verifikasiUmum");
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
                  <h6 className="fw-bold">LOGIN UMUM</h6>
                  <hr />
                </div>
                {validation.msg && (
                  <div className="alert alert-danger">{validation.msg}</div>
                )}
                <form onSubmit={loginHandler}>
                  <label className="mb-1">NIK</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-envelope"></i>
                    </span>
                    <input
                        value={nik}
                        onChange={(e) => setNik(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="NIK"
                    />
                  </div>
                  {validation.nik && (
                    <div className="alert alert-danger">
                      {validation.nik[0]}
                    </div>
                  )}
                  <label className="mb-1">No KK</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-envelope"></i>
                    </span>
                    <input
                        value={no_kk}
                        onChange={(e) => setNokk(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="No Kartu Keluarga"
                    />
                  </div>
                  {validation.no_kk && (
                    <div className="alert alert-danger">
                      {validation.no_kk[0]}
                    </div>
                  )}
                  <div className="input-group mb-3">
                    <input
                      value={1}
                      type="hidden"
                      className="form-control"
                    />
                  </div>
                  
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginUmum;
