var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require("mongoose"),
    app = express(),
    port = 3000;

//models and seeds
var Ingredient = require('./models/ingredients'),
    Hardware = require('./models/hardware'),
    seeds = require('./seeds'),
    Stage = require('./models/stages'),
    Recipe = require('./models/recipes')


seeds.ingredientsSeedDB()
seeds.hardwareSeedDB()
seeds.stageSeedDB()
seeds.recipeSeedDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/bookofrecipes', {useNewUrlParser: true})


app.get('/', (req, res) => {
    res.render('index')
})

//recipes routes
app.get('/recipes', (req, res) => {
    Recipe.find({},(err,allRecipes)=>{
        if(err){
            console.log('error finding recipes\n',err)
        } else {
            res.render('recipes/index',{recipes:allRecipes})
        }
    })
})

//Ingredients routes
app.get('/ingredients', (req, res) => {
    Ingredient.find({},(err,allIngredients)=>{
        if(err){
            console.log('error fetching ingredients\n',err)
        } else {
            res.render('ingredients/index',{ingredients:allIngredients})
        }
    })
})

//hardware routes
app.get('/hardware',(req,res)=>{
    Hardware.find({},(err,allHardware)=>{
        if(err){
            console.log('error fetching hardware\n',err)
        }else{
            res.render('hardware/index',{hardware:allHardware})
        }
    })
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.listen(port, function () {
    console.log('server up and running on port', port)

})