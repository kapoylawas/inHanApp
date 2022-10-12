import { Link } from 'react-router-dom'

function CardUlpim() {

    return(
        <div className="col-6 col-md-3 mb-4" >
            <Link to="/web/ulpim" className="text-decoration-none text-dark">
                <div className="card h-100 border-0 rounded shadow-sm">
                    <div className="card-body text-center">
                        <img src={require("../../assets/images/city-map.png")} style={{ width: "80px" }} alt=""/>
                        <hr/>
                        <h6>Ulpim</h6>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardUlpim;