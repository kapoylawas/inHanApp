/* eslint-disable jsx-a11y/alt-text */
function CardMobile() {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-12 col-md-4 col-lg-4 mb-4">
        <div className="card border-0 rounded shadow-custom h-100">
            <img src={require("../../assets/images/mobile1.png")}/>
        </div>
      </div>
      <div className="col-12 col-md-4 col-lg-4 mb-4">
        <div className="card border-0 rounded shadow-custom h-100">
            <img src={require("../../assets/images/mobile2.png")}/>
        </div>
      </div>
      <div className="col-12 col-md-4 col-lg-4 mb-4">
        <div className="card border-0 rounded shadow-custom h-100">
            <img src={require("../../assets/images/mobile3.jpeg")}/>
        </div>
      </div>
    </div>
  );
}

export default CardMobile;
