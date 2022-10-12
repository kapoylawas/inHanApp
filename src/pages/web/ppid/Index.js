import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import LayoutWeb from "../../../layouts/Web";

function Ppid() {
  return (
    <React.Fragment>
      <LayoutWeb>
        <br></br>
        <br></br>
        <br></br>
        <div className="container mt-7">
          <div className="col-12 mt-5">
            <div className="card border-0 rounded shadow-sm border-top-success">
              <div className="card-header">
                <span className="font-weight-bold">
                  <i className="fa fa-folder"></i> Daftar Informasi Publik
                </span>
              </div>
              <div className="card-body">
                <form className="form-group">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="search by judul name"
                    />
                    <button type="submit" className="btn btn-md btn-success">
                      <i className="fa fa-search"></i> SEARCH
                    </button>
                  </div>
                </form>
                <div className="table-responsive">
                  <table className="table table-bordered table-striped table-hovered">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Di Buat</th>
                        <th scope="col">Judul</th>
                        <th scope="col">Jenis Informasi</th>
                        <th scope="col">Kategori</th>
                        <th scope="col">Sub Kategori</th>
                        <th scope="col">Penanggung Jawab</th>
                        <th scope="col">Bentuk</th>
                        <th scope="col">Unduh</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">1</td>
                        <td className="text-center">2017-05-13</td>
                        <td className="text-center">
                          SK PPID Sekretariat DPRDSK PPID Sekretariat DPRD
                        </td>
                        <td className="text-center">informasi</td>
                        <td className="text-center">Profil</td>
                        <td className="text-center">SK PPID Pembantu</td>
                        <td className="text-center">Sekretariat DPRD</td>
                        <td className="text-center">Softcopy</td>
                        <td className="text-center">
                          <button className="btn btn-sm btn-danger">
                            <Link to="/web/formPermohonan">
                              <i className="fa fa-download"></i>
                            </Link>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default Ppid;
