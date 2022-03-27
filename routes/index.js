var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res,) => {
  res.render('pages/index');
});

router.get('/single-product', async (req, res,) => {
  res.render('pages/single-product');
});

module.exports = router;
