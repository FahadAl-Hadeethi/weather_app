import React from "react";

function WeatherCard({ weather }) {
    const getWindDirection = (deg) => {
        const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        const index = Math.round((deg % 360) / 45) % 8;
        return directions[index];
    };

    return (
        <div className="weather-card">
            <h5>{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</h5>
            <p>{new Date().toLocaleDateString()}</p>
            <h5>{weather.name}, {weather.sys.country}</h5>
            <h1>{weather.main.temp.toFixed(1)}°C</h1>
            <p>{weather.weather[0].description}</p>
            <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                alt="Weather Icon"
            />
            <p>Feels Like: {weather.main.feels_like.toFixed(1)}°C</p>
            <p>Min: {weather.main.temp_min.toFixed(1)}°C</p>
            <p>Max: {weather.main.temp_max.toFixed(1)}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Pressure: {weather.main.pressure} hPa</p>
            <p>Visibility: {(weather.visibility / 1000).toFixed(1)} km</p>
            <p>Wind Speed: {weather.wind.speed} km/h</p>
            <p>Wind Direction: {getWindDirection(weather.wind.deg)}</p>
            <p>Cloud Coverage: {weather.clouds.all}%</p>
            <p>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
            <p>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
        </div>
    );
}

export default WeatherCard;