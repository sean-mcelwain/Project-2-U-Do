const router = require('express').Router();
const userRoutes = require('./userRoutes');
const listRoutes = require('./listRoutes');
const taskRoutes = require('./taskRoutes');

router.use('/users', userRoutes);
router.use('/lists', listRoutes);
router.use('/tasks', taskRoutes);


module.exports = router;
