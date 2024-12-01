import React, { useState, useEffect } from "react";
import axios from "axios";

function CarDetails({ match }) {
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/getOneCar/${match.params.id}`);
        setCar(response.data);
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };
    fetchCarDetails();
  }, [match.params.id]);

  if (!car) return <div>Loading...</div>;

  return (
    <div>
      <h2>{car.marka}</h2>
      <img src={car.modelImg} alt={car.marka} width="300" />
      <p>{car.description}</p>
      <p><strong>Price:</strong> {car.narxi}</p>
      <p><strong>Year:</strong> {car.year}</p>
      <p><strong>Distance:</strong> {car.distance}</p>
    </div>
  );
}

export default CarDetails;
