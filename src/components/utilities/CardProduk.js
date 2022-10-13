import { Link } from "react-router-dom";

function CardProduk() {
  return (
    <div className="col-6 col-md-3 mb-4">
      <Link to="/web/ppid" className="text-decoration-none text-dark">
        <div className="card h-100 border-0 rounded shadow-sm">
          <div className="card-body text-center">
            <img
              src={require("../../assets/images/dairy-products.png")}
              style={{ width: "80px" }}
              alt=""
            />
            <hr />
            <h6>Produk Unggulan Kota Blitar</h6>
          </div>
          <div className="row">
          <div className="col-12 col-md-6 text-left">
            <span
              className="badge badge-pill badge-warning text-white border-0 shadow-sm mb-3"
              style={{ backgroundColor: "#3622ed" }}
            >
              {" "}
              Produk Unggulan{" "}
            </span>
          </div>

          <div className="col-12 col-md-6 text-right">
            <span>
              <i className="fa fa-star mr-1" style={{ color: "#ffae00" }}></i>
              {" "}
              Terfavorit{" "}
            </span>
          </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardProduk;
