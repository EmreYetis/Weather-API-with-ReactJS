import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import City from "./City";

function App() {
  const key = "2d52c39f5964b7670f305ccbc6532f87";
  const [city, setCity] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getWeather() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getWeather();
  }, [search]);
  console.log(search);
  return (
    <div className="App">
      <div className="weather">
        <h1>Give your City</h1>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Where do you live?"
          type="text"
        />
        {city && <City city={city} />}
      </div>
    </div>
  );
}

export default App;
