var express = require('express');
var router = express.Router();
var moment = require('moment');

const messages = [
  {
    title: "Hello Dude",
    user: "HolyNekK",
    text: "I love programming because of it's endless applications, you wish for something and programming can made it possible if you have enough resources and skill, second thing I love about programming is that, it build your problem solving skill which increases your creativity, and when you become more creative for a thing, you explore it, you love it, and you dream about it.",
    day: moment().format('LLL'),
  },
  {
    title: "Hello My Friend",
    user: "HolyMoly",
    text: "helLo DUDE. I hopE yoU ArE doiNg WeLL, bECAuSE i do. IF YOU dON't, just Leave ME A mESsaGE. Me ANd THE boIZ lovE YoU <3",
    day: moment().format('LLL'),
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title:'Mini Messageboard', messages: messages});
});

router.get('/new', function(req, res, next) {
  res.render('form', {title:'Mini Messageboard', messages: messages});
});

router.post('/new', function(req, res, next){
  const newMesage = {
    title: req.body.title,
    user: req.body.username,
    text: req.body.description,
    day: moment().format('LLL')
  }
  console.log(newMesage);
  messages.unshift(newMesage);
  res.redirect('/');
});




module.exports = router;
