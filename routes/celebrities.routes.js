const res = require('express/lib/response');
const CelebrityModel = require('../models/Celebrity.model');
// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()




//Request our model
router.get('/', async (req, res, next) => {
try {
const allCelebrities = await CelebrityModel.find();
console.log('1 is working✨',allCelebrities);
res.render('celebrities/celebrities', {allCelebrities})   
} catch (error) {
console.log('error in the celebrities posting', error); 
}
});




//create new celebrity
router.get('/create', (req, res, next) => {
console.log('2 is working✨');
res.render('celebrities/new-celebrity')    
});


router.post('/create',async (req, res, next) => {
    console.log('3 is working✨');
try {
const newCelebrity = await CelebrityModel.create(req.body)
res.redirect('/celebrities')     
} catch (error) {
res.redirect('/celebrities/new-celebrity')    
console.log('error creating a new celebrity', (error));
}  
});




module.exports = router