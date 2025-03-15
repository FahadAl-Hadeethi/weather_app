import React, { useState } from "react";
import { fetchWeather, fetchForecast } from "./WeatherService";
import WeatherCard from "./WeatherCard";
import ForecastCard from "./ForecastCard";
import './App.css';
//app
function App() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState("");

    const getWeatherData = async () => {
        try {
            const weatherData = await fetchWeather(city);
            const forecastData = await fetchForecast(city);
            setWeather(weatherData);
            setForecast(forecastData);
            setError("");
        } catch (err) {
            setError("City not found. Please try again.");
            setWeather(null);
            setForecast(null);
        }
    };

    return (
        <div className="container">
            <h1 className="app-title">Weather App</h1>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className="btn btn-primary" onClick={getWeatherData}>
                    Search
                </button>
            </div>
            {error && <p className="text-danger">{error}</p>}
            <div className="weather-content">
                {weather && <WeatherCard weather={weather} />}
                {forecast && <ForecastCard forecast={forecast} />}
            </div>
        </div>
    );
}

export default App;