const Sequelize = require("sequelize");
const db = require("../db");

const Item = db.define("item", {
  barcode:{type:Sequelize.STRING},
  name: { type: Sequelize.STRING,allowNull: false },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://via.placeholder.com/480x240?text=Placeholder",
  },
});

module.exports = Item;