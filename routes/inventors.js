var express = require('express');
var router = express.Router();
var inventors = require('../inventors.json');

router.get('/',function(req,res,next){
    res.render('inventors',{title:'Inventors','inventors':inventors});
});

module.exports = router;