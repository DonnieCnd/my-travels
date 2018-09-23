import React from "react";

const Travel = ({ destination, photo, country, distance }) => (
  <ul>
    <p>{destination}</p>
    <img src={photo} alt={destination} />
    <p>{country}</p>
    <p>{distance}</p>
  </ul>
);

export default Travel;