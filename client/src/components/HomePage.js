import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "../styles/Homepage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-content">
        <h1>Welcome to the Beverage Vending Machine</h1>
        <p>Choose from a variety of refreshing beverages!</p>
        <Button type="primary" size="large">
          <Link to="/order">Order Now</Link>
        </Button>
      </div>
      <div className="features">
        <h2>Our Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Easy Ordering</h3>
            <p>Order your favorite beverage with just a few clicks.</p>
          </div>
          <div className="feature-item">
            <h3>Manage Inventory</h3>
            <p>Keep track of inventory levels and update them as needed.</p>
          </div>
          <div className="feature-item">
            <h3>Beverage Logs</h3>
            <p>View logs of all beverages dispensed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
