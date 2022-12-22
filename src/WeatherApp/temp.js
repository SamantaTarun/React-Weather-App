import React, { useEffect, useState } from "react";
import Weathercard from "./weathercard";
import "./style.css";
const Temp = () => {
  const [searchValue, setSearchValue] = useState("kolkata");
  const [temparature, setTemparature] = useState({});
 
  const getWeatherInfo = async () => {
    try {
      console.log(searchValue);
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      console.log(searchValue);
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      const { temp, humidity, pressure } = data.main;
      const { main: weathermode } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const newWeatherInf = {
        temp,
        humidity,
        pressure,
        weathermode,
        name,
        speed,
        country,
        sunset,
      };
      setTemparature(newWeatherInf);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="text here"
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>

      <Weathercard {...temparature} />
    </>
  );
};

export default Temp;
