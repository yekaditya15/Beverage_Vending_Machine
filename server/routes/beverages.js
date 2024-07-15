const express = require("express");
const router = express.Router();
const beverageController = require("../controllers/beveragesController");
const Inventory = require("../models/Inventory");
const BeverageLog = require("../models/beverageLog");

// GET all beverages
router.get("/beverages", (req, res) => {
  const beverages = [
    "black-coffee",
    "black-coffee-no-sugar",
    "coffee-with-milk",
    "coffee-with-milk-no-sugar",
  ];
  res.json(beverages);
});

// GET current inventory
router.get("/inventory", async (req, res) => {
  try {
    const inventory = await Inventory.findOne();
    if (!inventory) {
      return res.status(404).json({ message: "Inventory not found" });
    }
    res.json(inventory);
  } catch (error) {
    console.error("Error fetching inventory:", error);
    res.status(500).json({ message: "Failed to fetch inventory" });
  }
});

// POST update inventory
router.post("/inventory", async (req, res) => {
  const { water, coffee, milk, sugar } = req.body;

  try {
    let inventory = await Inventory.findOne();

    if (!inventory) {
      inventory = new Inventory({
        water: Number(water),
        coffee: Number(coffee),
        milk: Number(milk),
        sugar: Number(sugar),
      });
    } else {
      inventory.water = Number(water);
      inventory.coffee = Number(coffee);
      inventory.milk = Number(milk);
      inventory.sugar = Number(sugar);
    }

    await inventory.save();

    res.json({ message: "Inventory updated successfully", inventory });
  } catch (error) {
    console.error("Error updating inventory:", error);
    res.status(500).json({ message: "Failed to update inventory" });
  }
});

// POST dispense beverage
router.post("/beverage", beverageController.dispenseBeverage);

// POST reset inventory to 0
router.post("/inventory/reset", async (req, res) => {
  try {
    let inventory = await Inventory.findOne();

    if (!inventory) {
      return res.status(404).json({ message: "Inventory not found" });
    }

    inventory.water = 0;
    inventory.coffee = 0;
    inventory.milk = 0;
    inventory.sugar = 0;

    await inventory.save();

    res.json({ message: "Inventory reset to 0 successfully", inventory });
  } catch (error) {
    console.error("Error resetting inventory:", error);
    res.status(500).json({ message: "Failed to reset inventory" });
  }
});

module.exports = router;
// GET dispensed beverage logs
router.get("/logs", async (req, res) => {
  try {
    const logs = await BeverageLog.find().sort({ dispensedAt: -1 });
    res.json(logs);
  } catch (error) {
    console.error("Error fetching beverage logs:", error);
    res.status(500).json({ message: "Failed to fetch beverage logs" });
  }
});

module.exports = router;
