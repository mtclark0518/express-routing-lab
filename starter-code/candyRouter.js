var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();

var candies = [{"id":1,"name":"Chewing Gum","color":"Red"},{"id":2,"name":"Pez","color":"Green"},{"id":3,"name":"Marshmallow","color":"Pink"},{"id":4,"name":"Candy Stick","color":"Blue"}];
//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req,res) {
	console.log(candies);
	res.send(candies);
});

router.get('/:id', function(req,res){
	res.send(candies[req.params.id - 1]);
});

router.post('/', function(req, res){
	var thing = {
		'id' : '5',
		'name' : "Jelly Belly",
		'color' : "Orange"
	};
	candies.push(thing);
	res.send(thing);
});

router.put("/:id", function(req, res){
	console.log(candies[req.params.id-1] = req.body);
	res.send(candies[req.params.id-1] = req.body);
});

router.delete("/:id", function(req, res){
	var id = req.params.id - 1;
	console.log(candies[id]);
	res.send(candies[id] = null);
});

module.exports = router;















// Fill out the rest of the routes here
// Implement `index`,`show`, `create`, `update`, and `destroy` functionality

module.exports = router;