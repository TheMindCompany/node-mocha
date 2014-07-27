var express = require('express');
var router = express.Router();
var data = require('../data');
 
/* GET all. */
router.get('/', function(req, res) {
  //console.log(data);
  res.render('index', { msg: JSON.stringify(data)});
});


/* GET one. */
router.get('/:id', function(req, res) {
  var id = req.param('id');

  if (!data[id]) {
	//console.log(data[id]);
	res.status(404).json({status: 'error'});
  } else {
	//console.log(data[id]);
	res.render('index', { msg: JSON.stringify(data[id]), id: 'Test View : Record #' + id });
  }

});

module.exports = router;


