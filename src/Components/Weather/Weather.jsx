import "./Weather.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Weather = () => {
  const [weatherDetails, setWeatherDetails] = useState({
    temp: "",
    icon: "",
    city: "",
  });

  const apiKey = "a5111b5ee9b036520de8c15d5434c706";

  const runApiCall = async (lat, lon) => {
    let api = "";
    if (lat && lon) {
      api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}`;
    } else {
      api = `https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=${apiKey}`;
    }

    try {
      const weatherResponse = await axios.get(api);
      console.log(weatherResponse.data);
      console.log(weatherResponse.data.weather[0].icon);
      setWeatherDetails({
        ...weatherDetails,
        temp: Math.round(weatherResponse.data.main.temp - 273.15),
        icon: weatherResponse.data.weather[0].icon,
        city: weatherResponse.data.name,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const success = async (position) => {
    const coordinates = await position.coords;
    const lat = coordinates.latitude;
    const lon = coordinates.longitude;
    console.log("inside", coordinates.latitude, coordinates.longitude);
    runApiCall(lat, lon);
  };

  const getGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(success);
  };

  useEffect(() => {
    getGeoLocation();
  }, []);

  return (
    <>
      <div className="weather-container">
        <div className="icon-container">
          {" "}
          <img
            className="weather-icon"
            src={`http://openweathermap.org/img/wn/${weatherDetails.icon}.png`}
            alt="weather"
          />
          <p>{weatherDetails.temp}°c</p>
        </div>
        <p className="city-name">in {weatherDetails.city}</p>
      </div>
    </>
  );
};

export { Weather };
