const express = require('express');
const app = express();
const port = 8000;
const axios = require('axios');
const cors = require('cors');
const jwt = require('jsonwebtoken');

app.use(cors());


const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, 'your_secret_key');
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};


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


app.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const user = new User({ username, password, email });
    await user.save();
    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});


app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || password !== user.password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const token = jwt.sign({ userId: user._id }, '42069');
    res.cookie('token', token, { httpOnly: true }); // Store the token in a secure cookie
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});


app.post('/logout', (req, res) => {
  res.clearCookie('token'); // Clear the token cookie
  res.status(200).json({ message: 'Logout successful' });
});
