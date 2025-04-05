import React from 'react'
import { Button } from 'react-bootstrap';

function WeatherButton({ cities, setCity, city }) {
    return (
        <div className="weather-button-group">
            <Button className={`btn ${city === "" ? "active" : ""}`}
                variant="dark"
                onClick={() => setCity("")}>CurrentLocation</Button>
            {
                cities.map((item, index) => (
                    <Button
                        className={`btn ${city === item ? "active" : ""}`}
                        variant="dark"
                        key={index}
                        onClick={() => setCity(item)}
                    >
                        {item}
                    </Button>
                ))
            }
        </div >
    )
}
export default WeatherButton