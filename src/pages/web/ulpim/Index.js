import React from "react";
// import { Link } from "react-router-dom";
import LayoutWeb from "../../../layouts/Web";

function Ulpim() {
  return (
    <React.Fragment>
      <LayoutWeb>
        <div className="container mt-5">
          <div className="row">
            <div className="col-7 mt-5">
              <div className="card border-0 rounded shadow-sm border-top-success">
                <div className="card-header">
                  <span className="font-weight-bold">
                    <i className="fa fa-folder"></i> Kirim Pengaduan
                  </span>
                  <div className="col-md-12 mt-3">
                    <div className="mb-12">
                      <label className="form-label fw-bold">Nama</label>
                      <div className="input-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Nama Sesuai Identitas Asli"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="mb-12">
                      <label className="form-label fw-bold">No Handphone</label>
                      <div className="input-group">
                        <input
                          className="form-control"
                          type="number"
                          placeholder="No HP"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="mb-12">
                      <label className="form-label fw-bold">Email</label>
                      <div className="input-group">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Email"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="mb-12">
                      <label className="form-label fw-bold">Alamat</label>
                      <div className="input-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="alamat"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="mb-12">
                      <label className="form-label fw-bold">Laporan</label>
                      <div className="input-group">
                        <textarea
                          className="form-control"
                          type="text"
                          placeholder="laporan"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="btn btn-md btn-success me-2 mt-4"
                    >
                      <i className="fa fa-save"></i> SAVE
                    </button>
                    <button
                      type="reset"
                      className="btn btn-md btn-warning mt-4"
                    >
                      <i className="fa fa-redo"></i> RESET
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5 mt-5">
              <div className="card border-0 rounded shadow-sm border-top-success">
                <div className="card-header">
                  <span className="font-weight-bold">
                    <i className="fa fa-folder mb-2"></i> Alamat Kantor
                    <p>DISKOMINFOTIK KOTA BLITAR</p>
                    <p>Jl. Dr. Moh. Hatta No.05 Blitar</p>
                    <p>SMS : 0856 0856 8689</p>
                    <p>Email : ulpim@blitarkota.go.id</p>
                  </span>
                  <span> 
                    <div className="alert alert-danger">
                      *) informasi akan diteruskan ke instansi terkait apabila data diisi dengan benar.
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default Ulpim;
