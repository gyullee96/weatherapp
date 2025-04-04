import React from 'react'
import { Button } from 'react-bootstrap';

function WeatherButton() {
    return (
        <div>
            <Button variant="dark">CurrentLocation</Button>
            <Button variant="dark">Paris</Button>
            <Button variant="dark">NewYork</Button>
            <Button variant="dark">Seoul</Button>
        </div>
    )
}
export default WeatherButton