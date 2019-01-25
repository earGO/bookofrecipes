var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require("mongoose"),
    app = express(),
    port = process.env.PORT || 3000;

//models and seeds
var Ingredient = require('./models/ingredients'),
    Hardware = require('./models/hardware'),
    seeds = require('./seeds'),
    Stage = require('./models/stages'),
    Recipe = require('./models/recipes'),
    mongoDB = process.env.MONGODB_URI || 'mongodb://localhost/bookofrecipes'


seeds.ingredientsSeedDB()
seeds.hardwareSeedDB()
// seeds.stageSeedDB()
seeds.recipeSeedDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(mongoDB, {useNewUrlParser: true})


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

app.get('/recipes/new',(req,res) =>{
    res.render('recipes/new')
})

app.get('/recipes/:id',(req,res) => {
    Recipe.findById(req.params.id).populate("stages").exec((err,fullRecipe) => {
        if(err){
            console.log('error loading recipe\n',err)
        } else {
            console.log(fullRecipe)
            res.render('recipes/show',{recipe:fullRecipe})
        }
    })
})

app.get('/recipes/:id/edit',(req,res) =>{
    res.render('recipes/edit')
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

app.get('/ingredients/new', (req, res) => {
            res.render('ingredients/new')
})

app.get('/ingredients/:id/edit', (req, res) => {
    Ingredient.findById(req.params.id,(err,ingredient)=>{
        if(err){
            console.log('error fetching ingredient\n',err)
        } else {
            res.render('ingredients/edit',{ingredient:ingredient})
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

app.get('/hardware/new', (req, res) => {
    res.render('hardware/new')
})

app.get('/hardware/:id/edit',(req,res)=>{
    Hardware.findById(req.params.id,(err,hardware)=>{
        if(err){
            console.log('error fetching hardware\n',err)
        }else{
            res.render('hardware/edit',{hardware:hardware})
        }
    })
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.listen(port, function () {
    console.log('server up and running on port', port)
})