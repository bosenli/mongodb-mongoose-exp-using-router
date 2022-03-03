//routes takes me to the aspect i need to look at 
const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('this is the root!'))

router.post('/plants', controllers.createPlant)  //it is from controller

module.exports = router; 