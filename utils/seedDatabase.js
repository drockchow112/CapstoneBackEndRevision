const { User } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    User.create({userName: "Leon", password: "12355",email:"Leon@gmail.com",}),
    User.create({userName: "jiang", password: "Xin2234",email:"Jiang@gmail.com"}),
  ]);
};

module.exports = seedDatabase;
