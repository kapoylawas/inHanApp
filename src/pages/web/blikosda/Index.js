import React from "react";
import CardProduk from "../../../components/utilities/CardProduk";
import PaginationComponent from "../../../components/utilities/Pagination";
// import { Link } from "react-router-dom";
import LayoutWeb from "../../../layouts/Web";

function Blikosda() {
  return (
    <React.Fragment>
      <LayoutWeb>
        <br></br>
        <br></br>
        <div className="container mt-5">
          <div className="col-12 mt-5">

          <div className="text-center mt-5">
            <h4 className="font-weight-bold text-dark">In Hand App</h4>
            <p
              className="text-dark"
              style={{
                fontSize: "1rem",
              }}
            >
              Blitar Kota In Hand App <br /> Produk Favorite Kota Blitar.
            </p>
            <div className="divider-custom mx-auto mb-5">
            </div>
            <div className="row justify-content-center mt-4">
              <CardProduk />
              <CardProduk />
              <CardProduk />
              <CardProduk />
              <CardProduk />
              <CardProduk />
              <CardProduk />
              <CardProduk />
              <CardProduk />
              <CardProduk />
              <CardProduk />
              <CardProduk />
            </div>
            <PaginationComponent />
          </div>

          </div>
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default Blikosda;
