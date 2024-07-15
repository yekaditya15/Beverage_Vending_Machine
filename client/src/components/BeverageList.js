import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BeverageList = () => {
  const [beverages, setBeverages] = useState([]);

  useEffect(() => {
    fetchBeverages();
  }, []);

  const fetchBeverages = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/beverages");
      setBeverages(response.data);
    } catch (error) {
      console.error("Error fetching beverages:", error);
    }
  };

  return (
    <div className="beverage-list">
      <h2>Available Beverages</h2>
      <ul>
        {beverages.map((beverage, index) => (
          <li key={index}>{beverage}</li>
        ))}
      </ul>
      <Link to="/order">Order Beverage</Link>
    </div>
  );
};

export default BeverageList;
