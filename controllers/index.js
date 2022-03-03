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

async function getAllPlants(req,res) {
  try {
    const plants = await Plant.find()
    return res.status(200).json({plants})
  } catch (error) {
    return res.status(500).send(error.message);
  }
}


async function getPlantById(req, res) {
    try {
      const { id } = req.params;
      const plant = await Plant.findById(id)
      if (plant) {
        return res.status(200).json({plant})
      }
      return res.status(404).send('Plant with the specified ID does not exist');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

//   const updatePlant = async (req, res) => {
//     try {
//         const { id } = req.params;
//         await Plant.findByIdAndUpdate(id, req.body, { new: true }, (err, plant) => {  //{property}
//             if (err) {
//                 res.status(500).send(err);
//             }
//             if (!plant) { //if there is no plant
//                 res.status(500).send('Plant not found!');
//             }
//           return res.status(200).json({ plant });
//         })
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
//   }
  
const updatePlant =  (req, res) => {
    try {
      const { id } = req.params;
     Plant.findByIdAndUpdate(id, req.body, { new: true }, function(err, plant) { // cant use arrow function
       
        if (err !== null) {
          console.log(err, 'error')
          res.status(404).send(err.message)
        } else {
          console.log(plant)
          res.json(plant)
        }
      })
    } catch (error) {
     return  res.status(500).send(error.message)
    }
  }

  async function deletePlant(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Plant.findByIdAndDelete(id)
      if (deleted) {
        return res.status(200).send("Plant deleted");
      }
      throw new Error("Plant not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
  

//basically export to "routes" file
module.exports = {
  createPlant, 
  getAllPlants,
  getPlantById,
  updatePlant,
  deletePlant
}