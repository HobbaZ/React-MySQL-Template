const router = require('express').Router();
const userRoutes = require('./user-routes');

// Prefix all routes defined in the routes with their route names
//e.g. /api/categories
router.use('/users', userRoutes);

module.exports = router;
