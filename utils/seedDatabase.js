const { User, Item } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    User.create({userName: "Lamarr", password: "12355",email:"Lamarr@gmail.com"}),
    User.create({userName: "Jiang", password: "Xin2234",email:"Jiang@gmail.com"}),
    User.create({userName: "Derrick", password: "Xwe2234",email:"Derrick@gmail.com"}),
    User.create({userName: "Kevin", password: "Xr22w34",email:"Kevin@gmail.com"}),
    Item.create({name:"apple",price:1.99,quantity:1,userId:1}),
    Item.create({name:"banana",price:2.92,quantity:1,userId:2 }),
    Item.create({name:"pan",price:1.99,quantity:1,userId:1}),
    Item.create({name:"book",price:2.92,quantity:1,userId:2 }),
    Item.create({name:"tee",price:1.29,quantity:1,userId:4}),
    Item.create({name:"hat",price:5,quantity:1,userId:3 }),
  ]);
};

module.exports = seedDatabase;
