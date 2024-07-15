const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  water: { type: Number, required: true },
  coffee: { type: Number, required: true },
  milk: { type: Number, required: true },
  sugar: { type: Number, required: true },
});

module.exports = mongoose.model("Inventory", inventorySchema);
