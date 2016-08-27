var express = require('express');
var router = express.Router();
var User = require('../models/mahasiswa')

router.get('/', function (req, res, next){
  User
    .find({}) //find semua data pada mongodb
    .exec(function(err, mahasiswa){
      res.render('insert', {data : mahasiswa})

    })
})

router.post('/', function (req, res, next){
  var name = req.body.nama
  var age = req.body.age

  var newUser = new User({
    name: name,
    age: age
  })

  newUser.save(function(err, saveUser){
    var userId = saveUser._id
    res.redirect('/mahasiswa/')
  })
})

module.exports = router;
