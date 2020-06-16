const { User } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    User.create({userName: "Lamarr", password: "12355",email:"Lamarr@gmail.com",}),
    User.create({userName: "Jiang", password: "Xin2234",email:"Jiang@gmail.com"}),
    User.create({userName: "Derrick", password: "Xwe2234",email:"Derrick@gmail.com"}),
    User.create({userName: "Kevin", password: "Xr22w34",email:"Kevin@gmail.com"}),
  ]);
};

module.exports = seedDatabase;
