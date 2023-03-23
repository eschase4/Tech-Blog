const router = require('express').Router();
const path = require('path');

// This is the 'get' route 
router.get('/', async (req, res) => {
  // Here, index.html is rendered
  res.render('homepage')
});

router.get('/login', async (req, res) => {
  // Here, index.html is rendered
  res.render('login')
});
module.exports = router;
