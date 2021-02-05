var express = require('express');
var router = express.Router();
var redis = require('redis');
var app = require('../app');

// add even listener to teh reids port
const REDIS_PORT = process.env.PORT || 6379;

// create the redis clinet
const client = redis.createClient(REDIS_PORT);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var redis_key = req.body.key;

  // store the key into the redis db and return true
  client.set('first_key', redis_key);

  res.render('success', {success: 'your redis key has been stored successfully'});
})

module.exports = router;
