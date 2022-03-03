//handle logic for CRUD, controller seems like a function control , that we see on manufacure there are different function to control a machine on the machine. 
const res = require('express/lib/response');
const Plant = require('../models/plant');

async function createPlant(req, res) {
  try {
    const plant = await new Plant(req.body)  //inserting data that is insde the body right request on body 
    await plant.save()
    return res.status(201).json({
      plant,
    })

  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

async function getAllPlants() {
  try {
    const plants = await Plant.find()
    return res.status(200).json({plants})
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  createPlant, 
  getAllPlants
}