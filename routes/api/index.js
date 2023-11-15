const router = require('express').Router();
// require all of the api routes for users and thoughts from their respective files
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// define paths for the routes and link them to the imported routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;