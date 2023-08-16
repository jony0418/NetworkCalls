const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

// Add prefix of `/thoughts` to routes created in `thoughtRoutes.js`
router.use('/thoughts', thoughtRoutes);

// Add prefix of `/users` to routes created in `userRoutes.js`
router.use('/users', userRoutes);

module.exports = router;
