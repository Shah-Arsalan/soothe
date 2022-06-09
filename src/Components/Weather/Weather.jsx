import "./Weather.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Weather = () => {
  const [weatherDetails, setWeatherDetails] = useState({
    temp: "",
    icon: "",
    city: "",
    coord_lat: "",
    coord_lon: "",
    feelslike: "",
    condition: "",
    mintemp: "",
    maxtemp: "",
  });

  const [appear, setAppear] = useState(false);

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

      setWeatherDetails({
        ...weatherDetails,
        temp: Math.round(weatherResponse.data.main.temp - 273.15),
        icon: weatherResponse.data.weather[0].icon,
        city: weatherResponse.data.name,
        coord_lat: weatherResponse.data.coord.lat,
        coord_lon: weatherResponse.data.coord.lon,
        feelslike: Math.round(weatherResponse.data.main.feels_like - 273.15),
        condition: weatherResponse.data.weather[0].main,
        mintemp: Math.round(weatherResponse.data.main.temp_min - 273.15),
        maxtemp: Math.round(weatherResponse.data.main.temp_max - 273.15),
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
      <div>
        <div
          onClick={() => setAppear((prev) => !prev)}
          className="weather-container"
        >
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
        {appear && (
          <div className="weathermodal">
            <city>{weatherDetails.city}</city>
            <div className="coords">
              <latitude>Lat : {weatherDetails.coord_lat}°</latitude>
              <longitude>Lon : {weatherDetails.coord_lon}°</longitude>
            </div>
            <condition>{weatherDetails.condition}</condition>
            <div className="icon-temp">
              <img
                className="weather-icon"
                src={`http://openweathermap.org/img/wn/${weatherDetails.icon}.png`}
                alt="weather"
              />
              <temp>{weatherDetails.temp}°c</temp>
            </div>
            <min> Min temp : {weatherDetails.mintemp}°c</min>
            <max> Max temp : {weatherDetails.maxtemp}°c</max>
            <feelslike>Feels like : {weatherDetails.feelslike}°c</feelslike>
          </div>
        )}
      </div>
    </>
  );
};

export { Weather };
