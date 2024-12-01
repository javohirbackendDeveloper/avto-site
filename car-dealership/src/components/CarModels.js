import React, { useState, useEffect } from "react";
import axios from "axios";

function CarModels() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // API'dan avtomobil ma'lumotlarini olish (Statik data misoli)
    const fetchedCars = [
      { id: 1, name: "Toyota" },
      { id: 2, name: "Honda" },
      { id: 3, name: "Ford" }
    ];
    setCars(fetchedCars);

    // Agar API ishlatsa, quyidagi kabi so'rov yuboring:
    axios.get("https://api.example.com/cars")
      .then(response => setCars(response.data))
      .catch(error => console.log("Error fetching cars:", error));

  }, []);

  return (
    <div>
      <h2>Car Models</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>{car.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CarModels;
