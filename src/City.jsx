import React from "react";
import "./App.css";

function City({ city }) {
  const icon = city.weather[0].icon;
  const link = `http://openweathermap.org/img/wn/${icon}.png`;
  console.log(city);
  return (
    <div>
      <div>
        <h1>{city.main.temp} °C</h1>
        <h1>{city.name}</h1>
        <h1 className="pad">{city.weather[0].main} </h1>
        <img src={link} alt="" />
      </div>
    </div>
  );
}

export default City;
