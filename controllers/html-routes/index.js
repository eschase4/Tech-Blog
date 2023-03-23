const router = require('express').Router();
const loginRoutes = require('./login-routes');
const homepageRoutes = require('./homepage-routes');

router.use('/', loginRoutes);
router.use('/', homepageRoutes);

module.exports = router;
