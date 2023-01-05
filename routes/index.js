var express = require('express');
var router = express.Router();

//username and password
const myusername = 'enggar'
const mypassword = 'enggar'

// a variable to save a session
var session;

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express sss' });
// });

router.get('/login', function(req, res, next){
  session=req.session;
  if(session.userid){
    res.redirect('/')
  }
  res.render('login', { title: 'People Information System' });
})

router.post('/login', function(req, res, next) {
  if(req.body.username == myusername && req.body.password == mypassword){
        session=req.session;
        session.userid=req.body.username;
        console.log(req.session)
        res.redirect('/');
    }
  res.send(`Invalid username or password. <a href=\'/logout'>click to re-LOGIN</a>`);
})

router.get('/',(req,res) => {
  session=req.session;
  if(session.userid){
      res.redirect('/performance-overview')
  }else
  res.render('login', { title: 'People Information System' });
});

router.get('/performance-overview',(req,res) => {
  session=req.session;
  if(session.userid){
      // res.send("Welcome User <a href=\'/logout'>click to logout</a>");
      res.render('performance-overview',{userid: session.userid,
        bigtitle: 'Overview',
        smalltitle: 'Performance'});
  }else
  res.render('login', { title: 'People Information System' });
});

router.get('/logout',(req,res) => {
  req.session.destroy();
  res.redirect('/login');
});

module.exports = router;

