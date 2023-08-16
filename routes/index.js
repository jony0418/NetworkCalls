// File: routes/index.js

const router = require('express').Router();
const apiRoutes = require('./api');

// Add prefix of `/api` to routes created in `api/index.js`
router.use('/api', apiRoutes);

module.exports = router;
