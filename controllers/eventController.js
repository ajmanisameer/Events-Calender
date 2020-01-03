var Event = require('../models/eventModel');

//display 
//Display events create form on GET
exports.event_create_post = (req, res, next) => {
    //validate fields
    // body('date', 'Date must not be empty.'),
    // body('month', 'Month must not be empty'),
    // body('time', 'Time must not be empty.'),
    // body('eventDes', 'EventDes must not be empty.')  
    
    
    var event = new event(req.body);
    event.save();
    res.status(201).send(event)
}