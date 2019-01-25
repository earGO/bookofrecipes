var mongoose = require('mongoose'),
    Ingredient = require('./models/ingredients'),
    Hardware = require('./models/hardware'),
    Recipe = require('./models/recipes'),
    Stage = require('./models/stages')

var dataIngredients =[
    {
        name:'Potatoes',
        image:'http://www.calorizator.ru/sites/default/files/imagecache/product_512/product/potato-1.jpg',
        proteins:'2',
        grease:'0,1',
        carbs:'17',
        calories:'77',
        content:'Potatoes are stupid'
    },
    {
        name:'Mushrooms',
        image:'https://cdn1.medicalnewstoday.com/content/images/articles/278/278858/mushrooms.jpg',
        proteins:'3.3',
        grease:'0.3',
        carbs:'3.3',
        calories:'22',
        content:'Mushrooms even more stupid are stupid'
    },
    {
        name:'Egg',
        image:'https://upload.wikimedia.org/wikipedia/commons/7/75/Eggs-5486.JPG',
        proteins:'13',
        grease:'11',
        carbs:'1.1',
        calories:'155',
        content:'Eggs are AWESOME (and not stupid)'
    },
        {
            name:'Green Vegetables',
            image:'https://www.india.com/wp-content/uploads/2017/06/green-vegetables-.jpg',
            proteins:'2.9',
            grease:'0.4',
            carbs:'3.6',
            calories:'23',
            content:'Put this in everything'
        }
],

 dataHardware =[
        {
            name:'Knife',
            image:'https://images-na.ssl-images-amazon.com/images/I/51XiZVgF%2BpL._SY355_.jpg',
            content:'Good old kitchen knife, i go nowhere without it'
        },
        {
            name:'Frying pan',
            image:'https://secure.img2-fg.wfcdn.com/im/1539376/compr-r85/5786/57865836/mineral-infused-non-stick-frying-pan.jpg',
            content:'Nice and clean ye olde frying pan'
        },
        {
            name:'kitchen spatula',
            image:'https://www.dhresource.com/0x0s/f2-albu-g6-M01-B4-DB-rBVaR1qreHaAYNyRAADwi2s7p54171.jpg/nylon-slotted-spatula-kitchen-cooking-utensil.jpg',
            content:'Better not scramble that nice pan with a steel spoon'
        }
    ],
    stageData=[
        {
            name:'Prepare ingredients',
            content:'wash potatoes, green vegetables, and other stuff'
        },
        {
            name:'Prepare frying pan',
            content:'Put frying pan on a fire, use some vegetable oil'
        },
        {
            name:'Fry potatoes',
            content:'Put potatoes on a frying pan along with'
        },
        {
            name:'Add eggs and stuff',
            content:'Cook it till you can stand the smell then EAT THE SHIT OF IT'
        }
    ],

    recipeData=[
        {
            name:'Fried potatoes with eggs',
            image:'https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/01/two-fried-eggs.jpg',
            content:'Frying eggs is freakin awesome'

        },
        {
            name:'Fried potatoes with eggs',
            image:'https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/01/two-fried-eggs.jpg',
            content:'Frying eggs is freakin awesome'

        },
        {
            name:'Fried potatoes with eggs',
            image:'https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/01/two-fried-eggs.jpg',
            content:'Frying eggs is freakin awesome'

        },
        {
            name:'Fried potatoes with eggs',
            image:'https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/01/two-fried-eggs.jpg',
            content:'Frying eggs is freakin awesome'

        },
        {
            name:'Fried potatoes with eggs',
            image:'https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/01/two-fried-eggs.jpg',
            content:'Frying eggs is freakin awesome'

        },
        {
            name:'Fried potatoes with eggs',
            image:'https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/01/two-fried-eggs.jpg',
            content:'Frying eggs is freakin awesome'

        }
    ]

var ingredientsSeedDB = function() {
    Ingredient.deleteMany({},(err) => {
        if(err){
            console.log('error wiping out Ingredients collection\n',err)
        } else {
            console.log('successfully wiped out Ingredients collection')
            dataIngredients.forEach(ingredient=>{
                Ingredient.create(ingredient,(err,createdIngredient)=>{
                    if(err){
                        console.log('error creating ingredient in a collection\n',err)
                    } else {

                    }
                })
            })
        }
    })
},
    hardwareSeedDB = function(){
    Hardware.deleteMany({},(err) => {
        if(err){
            console.log('error wiping out Hardware collection \n',err)
        } else {
            console.log('successfully wiped out Hardware collection')
            dataHardware.forEach(hardware=>{
                Hardware.create(hardware,(err,createdHardware)=>{
                    if(err){
                        console.log('error creating item in Hardware collection')
                    }
                })
            })
        }
    })
    },

/*    stageSeedDB = function(){
        Stage.deleteMany({},(err)=>{
            if(err){
                console.log('error wiping out Stages collection \n',err)
            } else {
                console.log('Stages collection wiped out successfully')
            }
        })
    },*/

    recipeSeedDB = function(){
        Recipe.deleteMany({},(err)=>{
            if(err){
                console.log('error wiping out Recipe collection\n',err)
            } else {
                console.log('successfully wiped out Recipe collection')
                recipeData.forEach(recipe=>{
                    Recipe.create(recipe,(err,createdRecipe)=>{
                        if(err){
                            console.log('failed creating new recipe\n',err)
                        } else {
                            console.log('created new recipe')
                                Stage.create({
                                    name:'Stage placeholder',
                                    content:'Stage content placeholder - here will be a description what to do with all ingredients. And for now - some LOREM'
                                            }
                                ,(err,createdStage)=>{
                                    if(err){
                                        console.log('error creating stage inside of a recipe\n',err)
                                    } else {
                                        createdRecipe.stages.push(createdStage)
                                        createdRecipe.save()
                                        // console.log('created stage inside recipe')
                                    }
                                })
                        }
                    })
                })

            }
        })

    }



module.exports={
    ingredientsSeedDB,
    hardwareSeedDB,
    // stageSeedDB,
    recipeSeedDB
}