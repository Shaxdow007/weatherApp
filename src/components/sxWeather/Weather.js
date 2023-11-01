import React from "react";
import searchIcon from "../assets/search.png";
import clearIcon from "../assets/clear.png";
import cloudIcon from "../assets/cloud.png";
import drizzleIcon from "../assets/drizzle.png";
import humidityIcon from "../assets/humidity.png";
import rainIcon from "../assets/rain.png";
import snowIcon from "../assets/snow.png";
import windIcon from "../assets/wind.png";
import { useState } from "react";
const Weather = () => {
  const [dataWeather, setDataWeather] = useState({});
  const [location, setLocation] = useState("");
  const [weatherIcon, setWearherIcon] = useState(cloudIcon);
  const API_Key = "9b105c3feb1a62ff34d03124249d74f4";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${API_Key}`;
  // conx to api
  const searchLocation = (e) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDataWeather(data));
    console.log(dataWeather);
    setLocation("");
    switch (dataWeather.weather[0].icon) {
      case "01d":
      case "01n":
        setWearherIcon(clearIcon);
        break;
      case "02d":
      case "02n":
        setWearherIcon(cloudIcon);
        break;
      case "03d":
      case "03n":
        setWearherIcon(drizzleIcon);
        break;
      case "04d":
      case "04n":
        setWearherIcon(drizzleIcon);
        break;
      case "09d":
      case "09n":
        setWearherIcon(rainIcon);
        break;
      case "10d":
      case "10n":
        setWearherIcon(rainIcon);
        break;
      case "13d":
      case "13n":
        setWearherIcon(snowIcon);
        break;
      default:
        setWearherIcon(cloudIcon);
        break;
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* header app */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize font-medium">
          sx<span className="text-sky-500">Weather</span>
        </h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="WeatherCity"
            className="w-[400px] bg-slate-100 px-4 py-2 outline-none border-0 rounded-tl-lg rounded-bl-lg"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button
            onClick={searchLocation}
            className="px-4 py-2 h-[40px] bg-slate-100 rounded-tr-lg rounded-br-lg hover:bg-slate-200 duration-300 ease-in"
          >
            <img src={searchIcon} alt="searchIcon" />
          </button>
        </div>
      </div>
      {/* body app */}
      <div className="my-12">
        {/* box img weather */}
        <div className="flex justify-center">
          <img src={weatherIcon} alt="weather status" />
        </div>
        {/* box city and weather °C */}
        <div className="text-center">
          {dataWeather.main ? (
            <h2 className="text-6xl font-bold mb-6">
              {Math.floor(dataWeather.main.temp)}°
            </h2>
          ) : (
            <h2 className="text-4xl font-bold mb-6 text-red-600">No Temp</h2>
          )}
          <h3 className="capitalize text-4xl">{dataWeather.name}</h3>
        </div>
        {dataWeather.name !== undefined && (
          <div className="windHumidity bg-slate-300/40 flex justify-between items-center my-20 p-4 rounded-lg">
            {/* box 1 */}
            <div className="flex justify-center items-center gap-4">
              <img src={windIcon} alt="windIcon" />
              <div>
                <h4 className="text-xl capitalize font-light">wind now</h4>
                {dataWeather.wind ? (
                  <h5 className="text-2xl font-medium">
                    {dataWeather.wind.speed}
                    <span className="text-base">km</span>
                  </h5>
                ) : null}
              </div>
            </div>
            {/* box 2 */}
            <div className="flex items-center gap-4">
              <img src={humidityIcon} alt="humidityIcon" />
              <div>
                <h4 className="text-xl capitalize font-light">humidity</h4>
                {dataWeather.main ? (
                  <h5 className="text-2xl font-medium">
                    {dataWeather.main.humidity}
                    <span className="text-base">%</span>
                  </h5>
                ) : null}
                <h5 className="text-2xl font-medium">
                  32<span className="text-base">%</span>
                </h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
