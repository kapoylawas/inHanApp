/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import Cookies from "js-cookie";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import {  Redirect, useHistory } from "react-router-dom";
import Api from "../../../api";
import OTPInput from "otp-input-react";
import { useTimer } from "../../../components/utilities/useTimer";

function VerifikasiUmum(props) {    
  document.title = "Login Web";
  
  const [setNik] = useState("");
  const [otp, setOtp] = useState("");

  const dataNik = (localStorage.getItem("nik"));
  //state loading
  const [isLoading, setLoading] = useState(false);

  //state validation
  const [validation, setValidation] = useState({});

  const [resendTime, setResendTime] = useTimer({
    multiplier: 2,
  });

  //history
  const history = useHistory();

  const handleResend = async () => {
    //set state isLoading to "true"
    setResendTime(0);

    await Api.post("/login/re-generate-otp", {
      nip: dataNik.replaceAll('"', ""),
      status: 2,
    })
      .then((response) => {
        //set state isLoading to "false"
        setLoading(false);

        //show toast
        toast.success("Resend Successfully.", {
          duration: 4000,
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });

      })
      .catch((error) => {
        //set state isLoading to "false"
        //set error response validasi to state "validation"
        setValidation(error.response.data);
      });
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    //set state isLoading to "true"
    setLoading(true);

    await Api.post("/login/validation-otp", {
      nip: dataNik.replaceAll("\"", ""),
      otp: otp,
      status: 2,
      platform: 1,
    })
      .then((response) => {
        //set state isLoading to "false"
        setLoading(false);

        //show toast
        toast.success("Login Successfully.", {
          duration: 4000,
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });

        Cookies.set("token", response.data.token);
        localStorage.setItem("status", JSON.stringify(2));

        //redirect dashboard page
        history.push("/admin/dashboard");
      })
      .catch((error) => {
        //set state isLoading to "false"
        setLoading(false);

        //set error response validasi to state "validation"
        setValidation(error.response.data);
      });
  };

  if (Cookies.get("token")) {
    //redirect dashboard page
    return <Redirect to="/admin/dashboard"></Redirect>;
}

  return (
    <React.Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mt-150">
            <div className="text-center mb-4">
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
                  <h6 className="fw-bold">Verification Code Umum</h6>
                  <hr />
                  <OTPInput
                      value={otp}
                      onChange={setOtp}
                      autoFocus
                      OTPLength={4}
                      otpType="number"
                      disabled={false}
                      secure
                      style={{ position:'relative', left: "25%" }}
                    />
                </div>
                {validation.msg && (
                  <div className="alert alert-danger">{validation.msg}</div>
                )}
                <form onSubmit={loginHandler}>
                  <div className="input-group mb-3">
                    <input
                      value={dataNik.replaceAll("\"", "")}
                      onChange={(e) => setNik(e.target.value)}
                      type="hidden"
                      className="form-control"
                      placeholder={dataNik.replaceAll("\"", "")}
                    />
                  </div>
                  <div className="form-group text-center" >
                   
                  </div>
                  <div className="input-group mb-3">
                    <input
                      value={2}
                      type="hidden"
                      className="form-control"
                    />
                  </div>
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
                    {isLoading ? "LOADING..." : "LOGIN"}{" "}
                  </button>
                </form>
                <hr />
                {resendTime !== 60 && <span> {resendTime} </span>}
                <button
                  className="btn btn-primary shadow-sm"
                  disabled={resendTime !== 60}
                  style={{ position: "relative", left: "170px" }}
                  onClick={handleResend}
                >
                  {" "}
                  Resend OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default VerifikasiUmum;
