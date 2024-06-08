import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="card text-white border-0">
      <img
        src="../assets/images/home/img1.jpg"
        className="card-img"
        alt="Background"
        height="1000px"
      />
      <div className="card-img-overlay d-flex flex-column justify-content-center">
        <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0">
            NEW SEASON ARRIVAL
          </h5>
          <p className="card-text lead fs-2">CHECKOUT ALL THE TRENDS</p>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
