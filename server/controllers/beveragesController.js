const sgMail = require("../config/sendgrid");
const Inventory = require("../models/Inventory");
const BeverageLog = require("../models/beverageLog");

exports.dispenseBeverage = async (req, res) => {
  const { type } = req.body;

  try {
    // Fetch current inventory
    let inventory = await Inventory.findOne();

    if (!inventory) {
      return res.status(404).json({ message: "Inventory not found" });
    }

    // Determine beverage recipe based on type
    let recipe;
    switch (type) {
      case "black-coffee":
        recipe = { water: 3, coffee: 1, sugar: 1 };
        break;
      case "black-coffee-no-sugar":
        recipe = { water: 3, coffee: 1 };
        break;
      case "coffee-with-milk":
        recipe = { water: 1, coffee: 1, milk: 2, sugar: 1 };
        break;
      case "coffee-with-milk-no-sugar":
        recipe = { water: 1, coffee: 1, milk: 2 };
        break;
      default:
        return res.status(400).json({ message: "Invalid beverage type" });
    }

    // Check if there's enough inventory to dispense the beverage
    for (let ingredient in recipe) {
      if (inventory[ingredient] < recipe[ingredient]) {
        const msg = {
          to: process.env.STAFF_EMAIL,
          from: process.env.PERSONAL_EMAIL,
          subject: "Inventory Alert: Out of Stock",
          text: `Inventory is out of ${ingredient}. Please restock.`,
        };

        try {
          await sgMail.send(msg);
          console.log(
            `Email notification sent to staff about ${ingredient} shortage.`
          );
        } catch (error) {
          console.error("Error sending email notification:", error);
        }

        return res
          .status(400)
          .json({ message: `Insufficient ${ingredient} , Mail Sent to Staff` });
      }
    }

    // Deduct ingredients from inventory
    for (let ingredient in recipe) {
      inventory[ingredient] -= recipe[ingredient];
    }

    // Save updated inventory
    await inventory.save();

    // Log the dispensed beverage
    const beverageLog = new BeverageLog({ type });
    await beverageLog.save();

    // Return success message
    res.json({ message: `Dispensed ${type} successfully` });
  } catch (error) {
    console.error("Error dispensing beverage:", error);
    res.status(500).json({ message: "Failed to dispense beverage" });
  }
};
