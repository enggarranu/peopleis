var express = require('express');
var router = express.Router();


router.get('/add-employee-data',(req,res) => {
  session=req.session;
  if(session.userid){
      res.render('add-employee-data',{userid: session.userid,
      bigtitle: 'Add Employee Data',
      smalltitle: 'Employee'
    });
  }else
  res.redirect('/login')
});

module.exports = router;

