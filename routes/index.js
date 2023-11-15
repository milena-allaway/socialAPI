const router = require('express').Router();
const apiRoutes = require('./api');

// use api folder to handle all api routes
router.use('/api', apiRoutes);

// if route is not found, return 404
router.use((req, res) => {
    return res.send('Wrong route!');
});
  
module.exports = router;