var mongoose = require('mongoose');

var obj = new mongoose.Schema({
    Date: {type: Number, required: true, min: 1, max: 31},
    Month: {type: String, required: true, min: 1, max: 12},
    Time: {type: Number, required: true},
    EventDes: {type: String, required: true}
});

module.exports = mongoose.model('2020Events', obj);