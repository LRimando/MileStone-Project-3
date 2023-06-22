const express = require('express');
const app = express();
const port = 8000;
const axios = require('axios');
const cors = require('cors');

app.use(cors());

app.get('/weather', (req, res) => {
  const { location } = req.query;

  const apiKey = 'ac647493ae56957ba5c10c969f967bec';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

  axios
    .get(apiUrl)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to fetch weather data' });
    });
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
