const Router = require('express');
const router = new Router();
const equipmentRouter = require('./equipmentRouter');
const projectRouter = require('./projectRouter');
const userRouter = require('./userRouter');

router.use('/equipment', equipmentRouter);
router.use('/project', projectRouter);
router.use('/user', userRouter);




module.exports = router;