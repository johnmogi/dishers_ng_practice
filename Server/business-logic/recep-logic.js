const dal = require('../data-access-layer/dal');

async function getAllRecepsAsync() {
    const sql = `SELECT * FROM receps`;
    const receps = await dal.executeAsync(sql);
    return receps;
  }
  async function getOneRecepAsync(id) {
    const sql = `SELECT * FROM receps WHERE recepID = ${id}`;
    const recep = await dal.executeAsync(sql);
    return recep;
  }
  // INSERT INTO `receps` 
  // (`recepID`, `dishID`, `chefName`, `recepName`, `ingredients`, `preperation`) VALUES
  //  (NULL, '2', 'Or Mogi', 'scrambled eggs', 'eggs, yoshi, mario, gumba', 'mix, salt, shake ,bake');
  async function addRecepAsync(recep) {
    const sql = `INSERT INTO receps ( dishID, chefName, recepName, ingredients, preperation) VALUES (${recep.dishID}, '${recep.chefName}', '${recep.recepName}', '${recep.ingredients}', '${recep.preperation}' )`;
    const addedRecep = await dal.executeAsync(sql);
    return addedRecep;
  }

  module.exports = {
    getAllRecepsAsync,
    getOneRecepAsync,
    addRecepAsync
  };
