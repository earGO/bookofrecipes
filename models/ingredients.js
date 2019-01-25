var mongoose = require("mongoose")

var ingredientSchema = new mongoose.Schema({
    name:String,
    image:String,
    proteins:String,
    grease:String,
    carbs:String,
    calories:String,
    content:String
})

module.exports = mongoose.model('Ingredient', ingredientSchema);