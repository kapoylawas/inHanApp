/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import LayoutWeb from "../../../layouts/Web";

function FormPermohonan() {
  document.title = "In Hand App - Tanda Trima";

  const tandaBukti = JSON.parse(localStorage.getItem("data"));

//   JSON.parse(localStorage.getItem('cartProduct'))

  console.log(tandaBukti);

  return (
    <React.Fragment>
      <LayoutWeb>
        <br></br>
        <br></br>
        <div className="container mt-5">
          <div className="col-12 mt-5">
            <div className="card border-0 rounded shadow-sm border-top-success">
              <div className="card-header">
                tanda bukti
                <div className="card-body">
                <div className="input-group">
                <div className="col-md-12">
                    <p>ID Permohonan : <i style={{ color: "black" }}> {tandaBukti.judul}</i></p>
                    <p>Tujuan: <i style={{ color: "black" }}>{tandaBukti.tujuan}</i></p>
                    <p>Dibuat pada: <i style={{ color: "black" }}>{tandaBukti.dibuat_pada}</i></p>
                    <p>Format Salinan: <i style={{ color: "black" }}>{tandaBukti.format}</i></p>
                    <p>Link Unduh Dokumen: <a className="btn btn-sm btn-primary me-2" target="_blank" href={tandaBukti.link_download} style={{ color: "black" }} rel="noreferrer"><i className="fa fa-download"></i></a></p>
                    <p>Status Permohonan: <i style={{ color: "black" }}>{tandaBukti.status_permohonan}</i></p>
                    <p>Keterangan: <i style={{ color: "black" }}>{tandaBukti.keterangan}</i></p>
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
