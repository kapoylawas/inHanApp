import React from "react";
import LayoutWeb from "../../../layouts/Web";

function FormPermohonan(params) {
  return (
    <React.Fragment>
      <LayoutWeb>
        <br></br>
        <br></br>
        <div className="container mt-5">
          <div className="col-12 mt-5">
            <div className="card border-0 rounded shadow-sm border-top-success">
              <div className="card-header">
                <span className="font-weight-bold">
                  <i className="fa fa-folder"></i> Permohonan Informasi Publik
                </span>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label fw-bold">Kategori Permohonan</label>
                      <select className="form-select">
                        <option value="">-- Select Category --</option>
                        <option></option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label fw-bold">Tujuan Penggunaan Informasi</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Enter Address Place"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default FormPermohonan;
