const { User, Item } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    User.create({userName: "Lamarr", password: "12355",email:"Lamarr@gmail.com"}),
    User.create({userName: "Jiang", password: "Xin2234",email:"Jiang@gmail.com"}),
    User.create({userName: "Derrick", password: "Xwe2234",email:"Derrick@gmail.com"}),
    User.create({userName: "Kevin", password: "Xr22w34",email:"Kevin@gmail.com"}),
    Item.create({
      barcode:"997252009694",
      name:"Bluetooth Android Robot Speaker for Phone Labtop PC Tablet",
      imageUrl: "https://images.barcodelookup.com/16027/160274587-1.jpg",
      userId:1
    }),
    Item.create({
      barcode:"784644416693",
      name:"NI- Nippon Universal Labtop Ac Adapter 90w",
      imageUrl: "https://images.barcodelookup.com/3440/34403965-1.jpg",
      userId:1
    }),
    Item.create({
      barcode:"784644416693",
      name:"NI- Nippon Universal Labtop Ac Adapter 90w",
      imageUrl: "https://images.barcodelookup.com/3440/34403965-1.jpg",
      userId:2
    }),

  ]);
};

module.exports = seedDatabase;
