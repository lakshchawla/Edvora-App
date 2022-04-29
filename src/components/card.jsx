import React from "react";

function Card(props) {
  return (
    // <div className="card">
    //   <div className="top">
    //     <h2 className="name">{props.name}</h2>
    //     <img className="circle-img" src={props.img} alt="avatar_img" />
    //   </div>
    //   <div className="bottom">
    //     <p className="info">{props.tel}</p>
    //     <p className="info">{props.email}</p>
    //   </div>
    // </div>

    <div className="Content mt-5 col-10 ms-auto me-auto">
      <div className="card ms-auto me-auto">
        <div className="row">
          <div className="card-body col-md-4">
            <img
              src="./images/609147088669907f652110b0_report-an-issue(about-maps).jpeg"
              alt="..."
              className="img-fluid"
            ></img>
          </div>
          <div className="card-body col-md-3">
            <p>Ride ld: {props.rideId}</p>
            <p>Origin Station: {props.originStation}</p>
            <p>station_path: {props.stationPath}</p>
            <p>Date: {props.date}</p>
            <p>Distance: {props.distance}</p>
          </div>
          <div className="col-md-5">
            <div className="ms-auto me-0 locationFocus">
              <a className="ms-auto mt-2 btn locBtn btn-dark" href="#">
                {props.city}
              </a>
              <a className="ms-2 mt-2 locBtn btn btn-dark" href="#">
                {props.state}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
