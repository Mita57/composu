const Router = require('express');
const router = new Router();
const projectController = require('../controllers/projectController')
const authMiddleware = require('../middleware/authMiddleware');

router.post('/addProject', authMiddleware, projectController.create);
router.get('/getProjectsByUser', projectController.getAllByUser);
router.get('/getProjectsWithFilter', projectController.getAllWithFilter);
router.get('/getAll', projectController.getAll);
router.get('/getProjectById', projectController.getOne);
router.put('/updateProj', projectController.updateProj);
router.delete('deleteProj', projectController.deleteProj);

module.exports = router;