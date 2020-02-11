var express = require('express');
var router = express.Router();
var request = require('request');

const URL = "http://garbarino-mock-api.s3-website-us-east-1.amazonaws.com/products";

//All products
router.get('/', function(req, res, next) {
    request(URL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.send(body);
        }else {
          console.log("error", response);
        }
      })
});

//Product by id
router.get('/:id', function(req, res, next) {
    var productId = req.params.id;
    request(`${URL}/${productId}`, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }else {
          console.log("error", response);
        }
    })

});

router.put('/:id', function(req, res, next) {
  var enabled = req.body;
  var productId = req.params.id;

  const options = {
    url: `${URL}/${productId}`,
    json: true,
    body: enabled
  };

  request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
          res.send(body);
      }else {
        console.log("error", response);
      }
  })

});

module.exports = router;
