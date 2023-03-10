import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleGoClick = async () => {
    const url = `/api/weather?lat=${lat}&lon=${lon}`;
    const response = await axios.get(url);
    setWeatherData(response.data);
  };

  return (
    <div>
      <input type="text" value={location} onChange={handleLocationChange} />
      <button onClick={handleGoClick}>Go</button>
      {weatherData && (
        <div>
          <h2>{weatherData.city.name}</h2>
          <ul>
            {weatherData.list.map((item) => (
              <li key={item.dt}>{item.main.temp}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
