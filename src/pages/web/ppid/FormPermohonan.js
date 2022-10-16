import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LayoutWeb from "../../../layouts/Web";

function FormPermohonan() {

  const [showhide, setShowhide] = useState('');
  
  const handleshowhide = (event) => {
     const getType = event.target.value
     setShowhide(getType);
  }

  const { id } = useParams();

  console.log(id);

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
                      <label className="form-label fw-bold">
                        Kategori Permohonan
                      </label>
                      <select className="form-select" onChange={(e)=>(handleshowhide(e))}>
                        <option value="">-- Tipe Pengaduan --</option>
                        <option value="perorangan">Perorangan</option>
                        <option value="lembaga">Lembaga</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold">
                        NIK/No. Identitas Pribadi
                      </label>
                      <div className="input-group">
                        <input
                          className="form-control"
                          type="number"
                          placeholder="NIK"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label fw-bold">
                        Tujuan Penggunaan Informasi
                      </label>
                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Enter Address Place"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label fw-bold">Nama Lengkap</label>
                      <div className="input-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Nama Lengkap"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>

                {/* file */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label fw-bold">File</label>
                      <div className="input-group">
                        <input
                          className="form-control"
                          type="file"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>

                {
                    showhide === 'lembaga' && (
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label fw-bold">Unggah KTP/KITAS Pimpinan</label>
                            <div className="input-group">
                              <input
                                className="form-control"
                                type="file"
                              ></input>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                }

                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
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
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label fw-bold">No Telpon</label>
                      <div className="input-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="No Telpon"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label fw-bold">Pekerjaan</label>
                      <div className="input-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Pekerjaan"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                    <button
                      type="submit"
                      className="btn btn-md btn-success me-2"
                    >
                      <i className="fa fa-save"></i> SAVE
                    </button>
                    <button type="reset" className="btn btn-md btn-warning">
                      <i className="fa fa-redo"></i> RESET
                    </button>
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
