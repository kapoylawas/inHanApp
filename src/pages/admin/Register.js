/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useHistory } from "react-router-dom";
import Api from "../../api";

function Register() {
  document.title = "Register Web";

  const [nik, setNik] = useState("");
  const [no_kk, setNokk] = useState("");
  const [nama_ibu, setNamaibu] = useState("");
  const [email, setEmail] = useState("");
  const [nomor_hp, setNohp] = useState("");

  //state loading
  const [isLoading, setLoading] = useState(false);

  //state validation
  const [validation, setValidation] = useState({});

  //history
  const history = useHistory();

    const num = 16;
    const handleNik = event => {
      setNik(event.target.value.slice(0, num));
    };

    const handleKk = event => {
      setNokk(event.target.value.slice(0, num));
    }

  const storeRegister = async (e) => {
    e.preventDefault();

    //set state isLoading to "true"
    setLoading(true);

    await Api.post("/register/umum", {
      nik: nik,
      no_kk: no_kk,
      nama_ibu: nama_ibu,
      email: email,
      nomor_hp: nomor_hp,
    })
      .then((response) => {
        //set state isLoading to "false"
        setLoading(false);

        //show toast
        toast.success("Register Data Successfully.", {
          duration: 4000,
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });

        console.log("response", response);
        //redirect dashboard page
        history.push("/admin/login");
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
                  <h6 className="fw-bold">Register Akun</h6>
                  <hr />
                </div>
                {validation.msg && (
                  <div className="alert alert-danger">{validation.msg}</div>
                )}
                <form onSubmit={storeRegister}>
                  <label className="mb-1">NIK</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-folder"></i>
                    </span>
                    <input
                      value={nik}
                      onChange={handleNik}
                      type="number"
                      className="form-control"
                      placeholder="NIK"

                    />
                  </div>

                  <label className="mb-1">No KK</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-folder"></i>
                    </span>
                    <input
                      value={no_kk}
                      onChange={handleKk}
                      type="number"
                      className="form-control"
                      placeholder="No Kartu Keluarga"
                    />
                  </div>

                  <label className="mb-1">Nama Ibu</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                    <input
                      value={nama_ibu}
                      onChange={(e) => setNamaibu(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Nama Ibu Kandung"
                    />
                  </div>

                  <label className="mb-1">EMAIL ADDRESS</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-envelope"></i>
                    </span>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>

                  <label className="mb-1">No HP</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-phone"></i>
                    </span>
                    <input
                      value={nomor_hp}
                      onChange={(e) => setNohp(e.target.value)}
                      type="number"
                      className="form-control"
                      placeholder="No Hand Phone"
                    />
                  </div>
                  <button
                    className="btn btn-primary shadow-sm rounded-sm px-4 w-100"
                    type="submit"
                    disabled={isLoading}
                  >
                    {" "}
                    {isLoading ? "LOADING..." : "REGISTER"}{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Register;
