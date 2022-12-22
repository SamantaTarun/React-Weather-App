import React, { useEffect, useState } from "react";

const Weathercard = ({
  temp,
  humidity,
  pressure,
  weathermode,
  name,
  speed,
  country,
  sunset,
}) => {
  const [weatherCondition, setWeatherCondition] = useState("");
  useEffect(() => {
    if (weathermode) {
      switch (weathermode) {
        case "Clouds":
          setWeatherCondition("wi-day-cloudy");
          break;

        case "Haze":
          setWeatherCondition("wi-fog");
          break;

        case "Clear":
          setWeatherCondition("wi-day-sunny");
          break;

        case "Mist":
          setWeatherCondition("wi-dust");
          break;
        default:
          setWeatherCondition("wi-day-sunny");
          break;
      }
    }
  });

  let secs = sunset;
  let datetemp = new Date(secs * 1000);
  let timeStr = `${datetemp.getHours()}:${datetemp.getMinutes()} `;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <a className={`wi ${weatherCondition}`}></a>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weathermode}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>

        {/* { 4 column section}  */}

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} PM <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weathercard;
