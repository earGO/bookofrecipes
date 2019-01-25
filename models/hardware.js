var mongoose = require("mongoose")

var hardwareSchema = new mongoose.Schema({
    name:String,
    image:String,
    content:String
})

module.exports = mongoose.model('Hardware', hardwareSchema);