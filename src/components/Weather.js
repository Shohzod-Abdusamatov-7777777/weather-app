import React from "react";
import "./weather.css";

const Weather = (props) => {
  return (
    <div className="bg-color mt-4 p-5">
      <div className=" text-center ">
        <div className="cards pt-3">
          <h1 className="">
            {props.city}
          </h1>
          <h1 className="display-1">{props.WeatherIcon}</h1>
          <h1>{props.temp_celsius}&deg;</h1>
          {minmaxTemp(props.temp_min, props.temp_max)}
          <h4>{props.description}</h4>
        </div>
      </div>
    </div>
  );
};

function minmaxTemp(min, max) {
  return (
    <h3>
      <span className="px-4">{min}&deg;</span>
      <span className="px-4">{max}&deg;</span>
    </h3>
  );
}

export default Weather;
