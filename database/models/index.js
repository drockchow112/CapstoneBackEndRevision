// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const User=require("./user");
const Item=require("./item");


module.exports = {
  User,
  Item,
};
