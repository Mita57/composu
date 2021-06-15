const Router = require('express');
const router = new Router();
const projectController = require('../controllers/projectController')

router.post('/addProject', projectController.create);
router.get('/getProjectsByUser', projectController.getAllByUser);
router.get('/getProjectsWithFilter', projectController.getAllWithFilter);
roter.get('/getProjectById', projectController.getOne);
