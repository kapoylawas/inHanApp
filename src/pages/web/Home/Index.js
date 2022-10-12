import React from "react";
import CardBlikosda from "../../../components/utilities/CardBlikosda";
import CardPpid from "../../../components/utilities/CardPpid";
import CardUlpim from "../../../components/utilities/CardUlpim";
import Jumbotron from "../../../components/utilities/Jumbotron";
//import layout web
import LayoutWeb from "../../../layouts/Web";

function Home() {
  return (
    <React.Fragment>
      <LayoutWeb>
        <div className="container mt-5">
          <h5 type="hidden"> SAsa </h5>
          <Jumbotron />

          <div className="row justify-content-center mt-4">
                
                    
                        <CardPpid />
                        <CardBlikosda />
                        <CardUlpim />
                        
                  
                
          </div> 

          <div className="text-center">
            <h4 className="font-weight-bold text-dark">In Hand App</h4>
            <p
              className="text-dark"
              style={{
                fontSize: "1rem",
              }}
            >
              Blitar Kota In Hand App <br /> Chanel my Youtube.
            </p>
            <div className="divider-custom mx-auto mb-3"></div>
            <div class="elfsight-app-485c81ed-9430-43f0-8376-b164dc395dd0"></div>
            <h2>Youtube Chanel</h2>
            <div class="elfsight-app-8c962cd0-ab06-4bc9-b531-95435a34a44c mt-3"></div>
          </div>
          {/* ig */}
          
        </div>

        
      </LayoutWeb>
    </React.Fragment>
  );
}

export default Home;
