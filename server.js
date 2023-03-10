const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

app.get('/api/weather', async (req, res) => {
  const { lat, lon } = req.query;
  const apiKey = '99541c2f977c89b98598feb6c35dae13';
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  const response = await axios.get(url);
  const weatherData = response.data;
  res.json(weatherData);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
