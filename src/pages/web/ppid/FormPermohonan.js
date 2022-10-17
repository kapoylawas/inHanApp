import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useHistory, useParams } from "react-router-dom";
import Api from "../../../api";
import LayoutWeb from "../../../layouts/Web";

function FormPermohonan() {
  document.title = "In Hand App - Permohonan";

  const data = [
    {
      id: 1,
      name: "perorangan",
    },
    {
      id: 2,
      name: "lembaga",
    },
  ];

  const [permohonan, setPermohonan] = useState("");
  const [nik, setNik] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [imagekitas, setImagekitas] = useState("");
  const [notlpn, setNotlpn] = useState("");
  const [work, setWork] = useState("");
  const [alamat, setAlamat] = useState("");

  //state categories
  const [categories, setCategories] = useState(data);

  //state validation
  const [setValidation] = useState({});

  //state loading
  const [isLoading, setLoading] = useState(false);

  //history
  const history = useHistory();

  const handleFileChange = (e) => {
    const imageData = e.target.files[0];

    if (!imageData.type.match("image.*")) {
      setImagekitas("");

      toast.error("Format File Tidak Cocok", {
        duration: 4000,
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }
    setImagekitas(imageData);
  };

  const handleshowhide = (event) => {
    const getType = event.target.value;
    setPermohonan(getType);
  };

  const { id } = useParams();

  const storePermohonan = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();

    formData.append("kategori", permohonan);
    formData.append("nik", nik);
    formData.append("tujuan", tujuan);
    formData.append("nama", nama);
    formData.append("email", email);
    formData.append("kitas", imagekitas);
    formData.append("notlpn", notlpn);
    formData.append("work", work);
    formData.append("alamat", alamat);
    formData.append("id_informasi", id);

    await Api.post("/ppid/permohonan-informasi-publik", formData, {
      // header
    })
      .then((response) => {
        setLoading(false);
        //show toast
        toast.success("Data Saved Successfully!", {
          duration: 4000,
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        
        console.log(response.data);
        localStorage.setItem("data", JSON.stringify(response.data.data));
        history.push("/web/tandaTrima");
      })
      .catch((error) => {
        setValidation(error.response.data);
      });
  };

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
                  <i className="fa fa-folder"></i> Permohonan Informasi Publik{" "}
                  {id}
                </span>
                <div className="card-body">
                  <form onSubmit={storePermohonan}>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label fw-bold">
                            Kategori Permohonan
                          </label>
                          <select
                            value={permohonan}
                            className="form-select"
                            onChange={(e) => handleshowhide(e)}
                          >
                            <option value="">-- Tipe Pengaduan --</option>
                            {/* <option value="perorangan">Perorangan</option>
                            <option value="lembaga">Lembaga</option> */}
                            {categories.map((category) => (
                            <option value={category.name} key={category.id}>
                              {category.name}
                            </option>
                          ))}
                          </select>
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-bold">
                            NIK/No. Identitas Pribadi
                          </label>
                          <div className="input-group">
                            <input
                              value={nik}
                              onChange={(e) => setNik(e.target.value)}
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
                            value={tujuan}
                            onChange={(e) => setTujuan(e.target.value)}
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
                          <label className="form-label fw-bold">
                            Nama Lengkap
                          </label>
                          <div className="input-group">
                            <input
                              value={nama}
                              onChange={(e) => setNama(e.target.value)}
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
                          <label className="form-label fw-bold">
                            Unggah KTP/KITAS Pimpinan{" "}
                            <p style={{ color: "#ffae00" }}>
                              (diupload jpg, jpeg, png dan maksimal 2MB.
                              *Pemberian Watermark pada file lebih dianjurkan)
                            </p>
                          </label>
                          <div className="input-group">
                            <input
                              className="form-control"
                              type="file"
                              onChange={handleFileChange}
                            ></input>
                          </div>
                        </div>
                      </div>
                    </div>
                    {permohonan === "lembaga" && (
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label fw-bold">
                              Upload Akta Notaris Lembaga / Organisasi
                            </label>
                            <div className="input-group">
                              <input
                                className="form-control"
                                type="file"
                              ></input>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label fw-bold">Alamat</label>
                          <div className="input-group">
                            <textarea
                              value={alamat}
                              onChange={(e) => setAlamat(e.target.value)}
                              className="form-control"
                              type="text"
                              placeholder="Alamat"
                              rows="5"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label fw-bold">Email</label>
                          <div className="input-group">
                            <input
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
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
                          <label className="form-label fw-bold">
                            No Telpon
                          </label>
                          <div className="input-group">
                            <input
                              value={notlpn}
                              onChange={(e) => setNotlpn(e.target.value)}
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
                          <label className="form-label fw-bold">
                            Pekerjaan
                          </label>
                          <div className="input-group">
                            <input
                              value={work}
                              onChange={(e) => setWork(e.target.value)}
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
                        disabled={isLoading}
                      >
                        <i className="fa fa-save"></i>{" "}
                        {isLoading ? "LOADING..." : "SAVE"}{" "}
                      </button>
                      <button type="reset" className="btn btn-md btn-warning">
                        <i className="fa fa-redo"></i> RESET
                      </button>
                    </div>
                  </form>
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
