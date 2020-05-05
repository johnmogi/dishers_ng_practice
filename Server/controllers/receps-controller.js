const express = require("express");
const recepsLogic = require("../business-logic/recep-logic");
const router = express.Router();
// GET http://localhost:3000/api/receps/
router.get("/", async (request, response) => {
  try {
    const receps = await recepsLogic.getAllRecepsAsync();
    response.json(receps);
  } catch (err) {
    response.status(500).send(err.message);
  }
});


// GET http://localhost:3000/api/receps/1
router.get("/:id", async (request, response) => {
  try {
    const id = +request.params.id;
    const recep = await recepsLogic.getOneRecepAsync(id);
    response.json(recep);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
// POST http://localhost:3000/api/receps/

router.post("/", async (request, response) => {
  try {
    const recep = request.body;
    const addedRecep = await recepsLogic.addRecepAsync(recep);
    response.status(201).json(addedRecep);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
module.exports = router;