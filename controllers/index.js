const router = require('express').Router();

const apiRoutes = require('./api-routes');
const htmlRoutes = require('./html-routes');

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

router.get('/', (req, res) => {
  // change back to /*
  res.redirect('/home');
});

router.get('/', (req, res) => {
  res.render('homepage');
});

module.exports = router;
