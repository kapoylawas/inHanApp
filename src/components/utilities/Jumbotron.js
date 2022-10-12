/* eslint-disable jsx-a11y/alt-text */

function Jumbotron(){
    return(
        <div class="bg-light p-5 rounded-lg m-3 ">
            <div className="row mt-5 mb-3">
              <div className="col-md-7">
                <h1>
                  Blitar{" "}
                  <span className="text btn btn-primary">In Hand APP</span>
                </h1>
                <p class="lead">
                  This is a simple hero unit, a simple jumbotron-styleasdadsa
                </p>
                <span className="badge badge-danger bg-primary rounded shadow-sm">
                  React.js
                </span>
              </div>
              <div className="col-md-5 d-none d-md-block text-right">
                
                <img
                  // src="https://santrikoding.com/images/bg-sk-2.png"
                  src={require("../../assets/images/jbtn.gif")}
                  className="w-100 text-right"
                  style={{ width:200, height:250, }}
                />
              </div>
            </div>
          </div>
    )
}

export default Jumbotron