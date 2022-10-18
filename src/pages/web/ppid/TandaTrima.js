/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import LayoutWeb from "../../../layouts/Web";

function FormPermohonan() {
  document.title = "In Hand App - Tanda Trima";

  const tandaBukti = JSON.parse(localStorage.getItem("data"));

  //   JSON.parse(localStorage.getItem('cartProduct'))

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
                  <i className="fa fa-award"></i> <b>Tanda Bukti</b>
                </span>

                <div className="card-body">
                  <div className="input-group">
                    <div className="col-md-12">
                      <table className="table table-bordered table-striped">
                        <tbody>
                          <tr>
                            <td>ID Permohonan</td>
                            <td>
                              <div className="alert alert-primary">
                                <b>{tandaBukti.id_permohonan} - <b>(Harap untuk menyimpan ID ini.)</b></b>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Kategori</td>
                            <td>{tandaBukti.kategori_pengajuan}</td>
                          </tr>
                          <tr>
                            <td>Tujuan</td>
                            <td>{tandaBukti.tujuan}</td>
                          </tr>
                          <tr>
                            <td>Dibuat Pada</td>
                            <td>{tandaBukti.dibuat_pada}</td>
                          </tr>
                          <tr>
                            <td>Format Salinan</td>
                            <td>{tandaBukti.format}</td>
                          </tr>
                          <tr>
                            <td>Status Permohonan</td>
                            <td>
                              <div className="alert alert-warning">
                                <b>{tandaBukti.status_permohonan}</b>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Keterangan</td>
                            <td style={{ color: "red" }} >{tandaBukti.keterangan}</td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="text-center mt-2 mb-2">
                        <a
                          className="btn btn-sm btn-danger me-2"
                          target="_blank"
                          href={tandaBukti.link_download}
                          rel="noreferrer"
                        >
                          <i className="fa fa-download"> DOWNLOAD PERMOHONAN </i>
                        </a>
                      </div>

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
