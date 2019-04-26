var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/niko', (req,res,next) =>{
  res.json({hello: 'from chris'})
})



module.exports = router;
