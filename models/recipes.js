var mongoose = require("mongoose")

var recipeSchema = new mongoose.Schema({
    name:String,
    image:String,
    content:String,
    stages:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Stage'
        }
    ],
    ingredients: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Ingredient'
        }
    ],
    hardware: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Hardware'
        }
    ]
})

module.exports = mongoose.model('Recipe', recipeSchema);