import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import CarModels from "./components/CarModels";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Car Dealership</h1>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/car-models">Car Models</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/car-models" element={<CarModels />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
