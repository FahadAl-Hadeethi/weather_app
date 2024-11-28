import React from "react";

function ForecastCard({ forecast }) {
    const dailyForecast = forecast.list.filter((_, index) => index % 8 === 0);

    return (
        <div className="forecast-card">
            <h5>5-Day Forecast</h5>
            <div className="forecast-container">
                {dailyForecast.map((day) => (
                    <div key={day.dt} className="forecast-item">
                        <p>{new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</p>
                        <img
                            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}
                            alt="Weather Icon"
                        />
                        <p>{day.main.temp.toFixed(1)}°C</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ForecastCard;