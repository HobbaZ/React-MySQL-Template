const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');

// Prefix all routes defined in the api directory with `/api`
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;