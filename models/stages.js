var mongoose = require("mongoose")

var stageSchema = new mongoose.Schema({
    name:String,
    content:String
})

module.exports = mongoose.model('Stage', stageSchema);