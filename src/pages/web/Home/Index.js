import React from "react";
import Jumbotron from "../../../components/utilities/Jumbotron";
//import layout web
import LayoutWeb from "../../../layouts/Web";

function Home() {
  return (
    <React.Fragment>
      <LayoutWeb>
        <div className="container mt-5">
          <h5> SAsa </h5>
          <Jumbotron />

          <div className="text-center">
            <h4 className="font-weight-bold text-dark">In Hand App</h4>
            <p
              className="text-dark"
              style={{
                fontSize: "1rem",
              }}
            >
              Daftar ebook dengan pembahasan studi kasus yang akan menuntunmu
              menjadi seorang <br /> Full-Stack Developer Expert.
            </p>
            
            <div className="divider-custom mx-auto"></div>
          </div>
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default Home;
