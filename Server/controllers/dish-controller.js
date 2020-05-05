const express = require("express");
const dishLogic = require("../business-logic/dish-logic");
const router = express.Router();
// GET http://localhost:3000/api/dishes/
router.get("/", async (request, response) => {
  try {
    const dishes = await dishLogic.getAllDishesAsync();
    response.json(dishes);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// GET http://localhost:3000/api/dishes/1
router.get("/:id", async (request, response) => {
    try {
      const id = +request.params.id;
      const dish = await dishLogic.getOneDishAsync(id);
      response.json(dish);
    } catch (err) {
      response.status(500).send(err.message);
    }
  });

module.exports = router;