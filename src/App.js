import "./App.css";
import React from "react";
import Weather from "./components/Weather";
import Form from "./components/form";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  WiCloudyWindy,
  WiDayRain,
  WiDaySnow,
  WiDaySunny,
  WiDayCloudy,
} from "react-icons/wi";

// api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
const API_key = "f42dcb8da03ff8ebb9a0c66ae5fc3332";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      WeatherIcon: undefined,
      description: "",
      error: false,
    };
  }

  changeIcon(response) {
    if (response.weather[0].main === "Rain") return <WiDayRain />;
    if (response.weather[0].main === "Mist") return <WiCloudyWindy />;
    if (response.weather[0].main === "Clouds") return <WiDayCloudy />;
    if (response.weather[0].main === "Snow") return <WiDaySnow />;
    if (response.weather[0].main === "Clear") return <WiDaySunny />;
  }

  getWeather = async (e) => {
    console.log("Submit");
    e.preventDefault();
    const cityValue = e.target.elements.city.value;
    const countryValue = e.target.elements.country.value;

    if (cityValue && countryValue) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${API_key}`
      );
      const response = await api_call.json();
      console.log(response);

      this.setState({
        city: `${response.name},${response.sys.country}`,
        description: response.weather[0].description,
        temp_max: Math.floor(response.main.temp_max - 273),
        temp_min: Math.floor(response.main.temp_min - 273),
        celsius: Math.floor(response.main.temp - 273),
        WeatherIcon: this.changeIcon(response),
      });
    } else this.setState({ error: true });
  };

  render() {
    console.log("render");
    return (
      <div className="bg-url">
        {this.state.error ? (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
              <span className="sr-only">Close</span>
            </button>
            <strong>Ogohlantirish!</strong> Maydon bo'sh bolishi mumkin emas!
          </div>
        ) : null}

        <Form getWeather={this.getWeather} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          icon={this.state.icon}
          temp_celsius={this.state.celsius}
          WeatherIcon={this.state.WeatherIcon}
        />
      </div>
    );
  }
}

export default App;
