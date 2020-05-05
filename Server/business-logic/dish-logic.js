const dal = require('../data-access-layer/dal');

async function getAllDishesAsync() {
    const sql = `SELECT * FROM dishes`;
    const vacs = await dal.executeAsync(sql);
    return vacs;
  }
  async function getOneDishAsync(id) {
    const sql = `SELECT * FROM dishes WHERE dishID = ${id}`;
    const dish = await dal.executeAsync(sql);
    return dish;
  }

  module.exports = {
    getAllDishesAsync,
    getOneDishAsync
  };
