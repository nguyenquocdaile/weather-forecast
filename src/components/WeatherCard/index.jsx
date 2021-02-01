import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = ({dt, temp_min, temp_max, main, icon}) => {

  const date = new Date(dt);

  // get Day
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <Card>
      <Card.Img
        variant="top"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{main}</Card.Title>
        <p>
          {days[date.getDay()]} 
        </p>
        <p>Min: {temp_min}°С</p>
        <p>Max: {temp_max}°С</p>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;