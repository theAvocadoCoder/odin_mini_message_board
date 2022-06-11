const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello world!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

/* GET new message form */
router.get('/new', function(req, res, next) {
  res.render('form');
})

/* POST new message */
router.post('/new', function(req, res, next) {
  const messageObj = {
    text: req.body.inputText,
    user: req.body.inputAuthor,
    added: new Date(),
  };
  messages.push(messageObj);
  res.redirect('/');
})

module.exports = router;
