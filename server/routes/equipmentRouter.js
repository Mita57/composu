const Router = require('express');
const router = new Router();
const equipmentController = require('../controllers/equipmentController');

router.post('/addEquipment', equipmentController.create);
router.get('/getEquipmentByUser', equipmentController.getAllByUser);
router.get('/getEqupmentById', equipmentController.getOne);

module.exports = router;
