import React, { useState } from 'react';
import './App.css';

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
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={handleLocationChange}
      />
      <button onClick={handleCheckWeatherClick}>Check Weather</button>
      {weatherData && (
        <div>
          <h2>{weatherData.city.name} Weather Forecast</h2>
          <ul>
            {weatherData.list.map((item) => (
              <li key={item.dt}>
                {item.dt_txt} - {item.main.temp} °F - {item.weather[0].description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
