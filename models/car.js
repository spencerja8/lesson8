/**
 * Created by Spencer on 2/7/2017.
 */
var mongoose = require('mongoose');

//define a schema for out car model
//very model starts with a mongoose schema
var carSchema = new mongoose.Schema({
    color: {
        type: String,
        required: "Please provide a color"
    },
    make: {
        type: String,
        required: "Please provide a make"
    },
    model: {
        type: String,
        required: "Please provide a model"
    },
    year: {
        type: Number,
        required: "Please provide a year"
    },
    isAutomatic: {
        type: Boolean,
        default: false
    }
});

//make this model available everywhere else
module.exports = mongoose.model('Car', carSchema);