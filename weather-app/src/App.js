import React, { useState } from 'react';
import axios from 'axios';
import LoginForm from './models/LoginForm';
import LogoutButton from './models/LogoutButton';
import RegistrationForm from './models/RegistrationForm';

function App() {
  const [weatherData, setData] = useState({});
  const [location, setLocation] = useState('');
  

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      const apiUrl = `http://localhost:8000/weather?location=${location}`;

      axios
        .get(apiUrl)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      setLocation('');
    }
  };

  return (
    <div className={`app ${typeof weatherData.main !== 'undefined' && (weatherData.main.temp > 66 ? 'warm' : 'cold')}`}>
      <div className="navbar">
        <div className="authentication">
          <LoginForm />
          <RegistrationForm />
          <LogoutButton />
        </div>
      </div>
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter Location"
          onKeyDown={searchLocation}
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{weatherData?.name}</p>
          </div>
          <div className="temp">{weatherData?.main ? <h1>{weatherData.main.temp}°F</h1> : null}</div>
          <div className="clouds">{weatherData?.weather ? <p>{weatherData.weather[0].main}</p> : null}</div>
        </div>
        {weatherData?.name !== undefined && (
          <div className="bottom">
            <div className="feels like">
              {weatherData?.main ? <p className="bold">{weatherData.main.feels_like}</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {weatherData?.main ? <p className="bold">{weatherData.main.humidity}</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {weatherData?.wind ? <p className="bold">{weatherData.wind.speed} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
    </div>
    </div>
  );
}

export default App;
