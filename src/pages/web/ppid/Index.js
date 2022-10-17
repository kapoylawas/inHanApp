import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../../api";
import LayoutWeb from "../../../layouts/Web";
import PaginationComponent from "../../../components/utilities/Pagination";

function Ppid() {
  //title page
  document.title = "PPID - Pengaduan";

  const [ppids, setPpid] = useState([]);

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  // console.log(currentPage);
  
  //state perPage
  const [perPage, setPerPage] = useState(0);

  //state total
  const [total, setTotal] = useState(0);

  //state search
  const [search, setSearch] = useState("");

  const fetchData = async (pageNumber,searchData) => {

    const page = pageNumber ? pageNumber : currentPage;

    //define variable "searchQuery"
    const searchQuery = searchData ? searchData : search;

    await Api.get(`/ppid/daftar-informasi-publik?search=${searchQuery}&page=${page}`, {
      
    })
    .then((response) => {

      setPpid(response.data.data.data);

      setCurrentPage(response.data.data.page);

      //set perPage
      setPerPage(response.data.data.per_page);

      //total
      setTotal(response.data.data.total);

    });
  };

  useEffect(() => {
    //call function "fetchDataPlaces"
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //function "searchHandler"
  const searchHandlder = (e) => {
    e.preventDefault();

    //call function "fetchDataPost"
    fetchData(search);
  };

  return (
    <React.Fragment>
      <LayoutWeb>
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
                  <form onSubmit={searchHandlder} className="form-group">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="search by place title"
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
                    {ppids.map((ppid, index) => ( 
                      <tr key={index}>
                        <td>{ppid.waktu}</td>
                        <td>{ppid.judul}</td>
                        <td>{ppid.jenis_info}</td>
                        <td>{ppid.kategori}</td>
                        <td>{ppid.sub_kategori}</td>
                        <td>{ppid.penanggung_jawab}</td>
                        <td>{ppid.bentuk}</td>
                        <td className="text-center">
                        <Link
                              to={`/web/formPermohonan/${ppid.id}`}
                              className="btn btn-sm btn-primary me-2"
                            >
                              <i className="fa fa-download"></i>
                        </Link>
                        </td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
                <PaginationComponent
                  currentPage={currentPage}
                  perPage={perPage}
                  total={total}
                  onChange={(pageNumber) => fetchData(pageNumber)}
                  position="end"
                />
              </div>
            </div>
          </div>
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default Ppid;
