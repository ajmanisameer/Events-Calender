var express = require('express');
var router = express.Router();
const Event = require('../models/eventModel')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', (req, res) => {
  Event.find({}, (err, data) => {
    res.render('list', { data: data })
  })
})
module.exports = router;
