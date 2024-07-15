const mongoose = require("mongoose");

const beverageLogSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  dispensedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("BeverageLog", beverageLogSchema);
