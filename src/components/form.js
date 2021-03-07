import React from "react";
import "bootstrap/dist/css/bootstrap.css";
const Form = (props) => {
  return (
    <div className="container text-center ">
      <form onSubmit={props.getWeather}>
        <div className="row">
          <div className="col-lg-4 col-md-3 col-sm-6">
            {" "}
            <input
              id="city"
              type="text"
              placeholder="City"
              name="city"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-lg-4 col-md-3 col-sm-6">
            <input
              id="country"
              type="text"
              placeholder="Country"
              name="country"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-lg-4 col-md-3 col-sm-12">
            <button className="btn btn-primary">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
