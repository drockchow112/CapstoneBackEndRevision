const Sequelize = require("sequelize");
const db = require("../db");

const Item = db.define("item", {
  name: { type: Sequelize.STRING, allowNull: false },
  price: { type: Sequelize.DECIMAL(1000,2), allowNull: false },
  quantity:{type:Sequelize.INTEGER, defaultValue:1,},
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://via.placeholder.com/480x240?text=Placeholder",
  },
});

module.exports = Item;