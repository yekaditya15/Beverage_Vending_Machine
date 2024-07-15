// src/components/OrderBeverage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "../styles/orderBeverage.css";

const OrderBeverage = () => {
  const [selectedBeverage, setSelectedBeverage] = useState("");
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

  const handleBeverageChange = (event) => {
    setSelectedBeverage(event.target.value);
  };

  const placeOrder = async () => {
    if (!selectedBeverage) {
      toast.error("Please select a beverage");
      return;
    }

    try {
      await axios.post("http://localhost:8000/api/beverage", {
        type: selectedBeverage,
      });
      toast.success(`Order placed for ${selectedBeverage}`);
      setSelectedBeverage("");
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Failed to place order, Inventory out of stock");
    }
  };

  return (
    <div className="order-beverage">
      <h2>Order Beverage</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          placeOrder();
        }}
        className="order-form"
      >
        <label>Select Beverage:</label>
        <select
          value={selectedBeverage}
          onChange={handleBeverageChange}
          className="beverage-select"
        >
          <option value="">Select...</option>
          {beverages.map((beverage, index) => (
            <option key={index} value={beverage}>
              {beverage}
            </option>
          ))}
        </select>
        <button type="submit" className="order-button">
          Place Order
        </button>
      </form>
      <Link to="/beverages" className="back-link">
        Back to Beverages
      </Link>
    </div>
  );
};

export default OrderBeverage;
