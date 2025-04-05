import React from 'react'

const WeatherBox = ({ weather }) => {
    console.log("weather", weather)

    const celsius = weather?.main?.temp;
    const fahrenheit = celsius ? (celsius * 1.8 + 32).toFixed(1) : null;
    return (
        <div className='weather-box'>
            <div className='location'>{weather?.name}</div>
            <h3>{weather?.weather?.[0]?.main}</h3>
            <h2>{celsius}°C / {fahrenheit}°F</h2>

        </div>
    )
}

export default WeatherBox