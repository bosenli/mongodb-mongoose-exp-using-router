//routes takes me to the aspect i need to look at 
const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('this is the root!'))

router.post('/plants', controllers.createPlant)  //it is from controller
//in post man body test on json
// {
//     "name": "Test Plant",
//     "description": "Test Deciption",
//     "image": "https://testimage.com/plant.png"
// }

router.get('/plants', controllers.getAllPlants)

router.get('/plants/:id', controllers.getPlantById) //add JSON Viewer extension to google chrome

router.put('/plants/:id', controllers.updatePlant)


module.exports = router; 