const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check);
router.put('/updateUser', authMiddleware, userController.updateCredentials);
router.get('/userById', userController.findUserById);
router.get('/usersByFilter', userController.findUsersByFilter);
router.get('/getAll', userController.getAll);

module.exports = router;