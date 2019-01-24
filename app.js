var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require("mongoose"),
    app = express(),
    port = 3000;

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/bookofrecipes', {useNewUrlParser: true})

var groceriesSchema = new mongoose.Schema({
    name:String,
    image:String,
    proteins:String,
    grease:String,
    carbs:String,
    kkallories:String
})

var Grocceries = mongoose.model('Groceries', groceriesSchema);

app.get('/', (req, res) => {
    res.send('got server up and running')
})

app.get('/recipes', (req, res) => {
    res.render('index')
})

app.listen(port, function () {
    console.log('server up and running on port', port)

})