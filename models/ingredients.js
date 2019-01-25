var mongoose = require("mongoose")

var ingredientSchema = new mongoose.Schema({
    name:String,
    image:String,
    proteins:String,
    grease:String,
    carbs:String,
    kkallories:String,
    content:String
})

module.exports = mongoose.model('Ingredient', ingredientSchema);