var express = require('express');
var router = express.Router();
var loginControlle = require('./../controllers/login.js');
var userControlle = require('./../controllers/user.js');
var articleControlle = require('./../controllers/article.js');
var classifyControlle = require('./../controllers/classify.js');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

console.log(loginControlle)
router.post('/login',loginControlle.login);
router.get('/user',userControlle.list);
router.post('/user', userControlle.insert);
router.put('/user/:id' ,userControlle.update);
router.delete('/user/:id' , userControlle.delete);

router.get('/article',articleControlle.list)
router.post('/article',articleControlle.insert);
router.get('/article/:id',articleControlle.show);
router.put('/article/:id',articleControlle.update);
router.delete('/article/:id',articleControlle.delete);

router.get('/classify',classifyControlle.list);
router.post('/classify',classifyControlle.insert);
router.put('/classify/:id',classifyControlle.updata);
router.delete('/classify/:id',classifyControlle.delete);
router.get('/classifyArticle/:id',classifyControlle.classifyArticle);


module.exports = router;
