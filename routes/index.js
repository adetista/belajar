var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Belajar Node", tanggal: new Date() });
});
router.get('/test', function(req, res, next){
  res.render('test')
})
module.exports = router;
