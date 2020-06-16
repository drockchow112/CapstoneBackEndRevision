// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const User=require("./user");
const Item=require("./item");

User.hasMany(Item);

Item.belongsTo(User);
module.exports = {
  User,
  Item,
};
