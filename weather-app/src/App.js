import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '99541c2f977c89b98598feb6c35dae13';
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`;

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCheckWeatherClick = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App container-fluid bg-dark text-white">
      <h1 className="text-center my-5">Weather App</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter location"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-primary btn-lg" onClick={handleCheckWeatherClick}>
          Check Weather
        </button>
      </div>
      {weatherData && (
        <div className="mt-5">
          <h2>{weatherData.city.name} Weather Forecast</h2>
          <ul className="list-unstyled">
            {weatherData.list.map((item) => (
              <li key={item.dt} className="mb-3">
                <strong>{item.dt_txt}</strong> -
                {item.main.temp} °F - {item.weather[0].description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
