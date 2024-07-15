import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "../styles/InventoryManagement.css";

const InventoryManagement = () => {
  const [inventory, setInventory] = useState({
    water: 0,
    coffee: 0,
    milk: 0,
    sugar: 0,
  });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await axios.get(
        "https://beverage-vending-machine.vercel.app/api/inventory"
      );
      setInventory(response.data);
    } catch (error) {
      console.error("Error fetching inventory:", error);
      toast.error("Failed to fetch inventory");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInventory((prevInventory) => ({
      ...prevInventory,
      [name]: Number(value),
    }));
  };

  const updateInventory = async () => {
    try {
      await axios.post(
        "https://beverage-vending-machine.vercel.app/api/inventory",
        inventory
      );
      toast.success("Inventory updated successfully");
      fetchInventory(); // Refresh inventory data
      setEditMode(false);
    } catch (error) {
      console.error("Error updating inventory:", error);
      toast.error("Failed to update inventory");
    }
  };

  const resetInventory = async () => {
    try {
      await axios.post(
        "https://beverage-vending-machine.vercel.app/api/inventory/reset"
      );
      toast.success("Inventory reset to 0 successfully");
      fetchInventory(); // Refresh inventory data
    } catch (error) {
      console.error("Error resetting inventory:", error);
      toast.error("Failed to reset inventory");
    }
  };

  return (
    <div className="inventory-management">
      <h2>Manage Inventory</h2>
      <div className="inventory-item">
        <label>Water:</label>
        <input
          type="number"
          name="water"
          value={inventory.water}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>
      <div className="inventory-item">
        <label>Coffee:</label>
        <input
          type="number"
          name="coffee"
          value={inventory.coffee}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>
      <div className="inventory-item">
        <label>Milk:</label>
        <input
          type="number"
          name="milk"
          value={inventory.milk}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>
      <div className="inventory-item">
        <label>Sugar:</label>
        <input
          type="number"
          name="sugar"
          value={inventory.sugar}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>
      <button
        onClick={() => {
          setEditMode(true);
        }}
        className="btn btn-update"
      >
        Update Inventory
      </button>
      {editMode && (
        <button onClick={updateInventory} className="btn btn-save">
          Save Inventory
        </button>
      )}
      <button onClick={resetInventory} className="btn btn-reset">
        Reset Inventory
      </button>
      <Link to="/" className="back-link">
        Back to Home
      </Link>
    </div>
  );
};

export default InventoryManagement;
