var express = require("express");
var router = express.Router();
const { Item,User } = require("../database/models");


/* GET all items. */
// /api/items
router.get("/", async (req, res, next) => {
  // try to get items object from database
  try {
    // items will be the result of the item.findAll promise
    const items = await Item.findAll({include:User});

    // if items is valid, it will be sent as a json response
    console.log(items);
    res.status(200).json(items);
  } catch (err) {
    // if there is an error, it'll passed via the next parameter to the error handler middleware
    next(err);
  }
});
// Route to serve single item based on its id
// /api/items/:id
// /api/items/456 would respond with a item with id 456
router.get("/:id", async (req, res, next) => {
    // take the id from params
    const { id } = req.params;
    // query the database for a item with matching id
    try {
      // if successful:
      const item = await Item.findByPk(id,{include:User});
      // send back the item as a response
      res.status(200).json(item);
    } catch (err) {
      // if error:
      // handle error
      next(err);
    }

  });
// Route to handle adding a item
// /api/items/
router.post("/", async (req, res, next) => {
    console.log(req.body);
  // Take the form data from the request body
  const {name, price, quantity } = req.body;
  // Create a item object
  const itemObj = {
    name: name,
    price: price,
    quantity:quantity,

  };
  try {
    const newitem = await Item.create(itemObj);
    res.status(201).send(newitem);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const updatedObj = { ...req.body };
  try {
    const item = await Item.findByPk(id);
    await item.set(updatedObj);
    const updatedItem = await item.save();
    res.status(201).send(updatedItem);
  } catch (err) {
    next(err);
  }
});

  
// Route to handle removing a item
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  // get an id for a item to delete
  try {
    // pass the id to the database to find item to be deleted
    // database would either respond succcess or fail
    const item = await Item.findByPk(id);
    // invoke the .destroy() method on the returned item
    await item.destroy();
    // send a success message to the client
    res.sendStatus(204);
  } catch (err) {

    next(err);
  }
});
module.exports = router;
