import React, { useState } from 'react';

const currentWeather = ( a617587166ac4dabbad3327dd6510684,  LosAngeles ) => {
    const url = 'http://api.weatherbit.io/v2.0/current'

fetch ('http://api.weatherbit.io/v2.0/current')
.then (response => response.json())
.then (data => {
    const weatherDiv = document.getElementById('weather');
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const output = `Temperature: ${temperature} °F<br> Description: ${description}`;
    // weatherDiv.innerHTML = output;
})
.catch(error => {
    console.log('Error', error);
    });
}

export default currentWeather;