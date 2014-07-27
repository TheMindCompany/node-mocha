var express = require('express');
var router = express.Router();
var data = require('../data');

/* GET all. */
router.get('/', function(req, res) {
  //console.log(data);
  res.json(data);
});

/* GET one. */
router.get('/:id', function(req, res) {
  var id = req.param('id');

  if (data[id]) {
    res.status(404).json({status: 'error'});
  } else {
    res.json(data[id]);
  }

});

module.exports = router;

