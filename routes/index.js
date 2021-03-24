var express = require('express');
var router = express.Router();
var moment = require('moment');

const messages = [
  {
    title: "Hello Moruk",
    user: "Mert Kaan",
    text: "ahhaahahhaahahah",
    day: moment().format('LLL'),
  },
  {
    title: "Yo I'm with ma boois",
    user: "Ahmet Mehmet",
    text: "heueheuhuehe",
    date: moment().format('LLL'),
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
