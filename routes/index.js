var express = require("express");
var router = express.Router();
var Event = require("../models/eventModel");

/* GET home page. */
router.get("/", function(req, res) {
  Event.find({}, (err, events) => {
    res.render('index', { title: "Events-Calender" });
  });
});

router.post("/", (req, res, next) => {
  var event = new Event(req.body);
  event.save();
  res.status(201).send(event);
  // console.log()
});



module.exports = router;
