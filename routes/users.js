var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var nama = req.query.nama
  res.send(nama);
});
router.get('/:nama/:umur', function(req, res, next){
  var nama = req.params.nama
  var umur = req.params.umur
  res.send(nama + ", " + umur)
})

module.exports = router;
