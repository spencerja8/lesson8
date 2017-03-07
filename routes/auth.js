/**
 * Created by Spencer on 3/7/2017.
 */
//grab router for express
var router = require('express').Router();

//inclide passport for authentication
var passport = require('passport');

var Account = require('../models/account');

//GET handler for register
router.get('/register', function(req,res,next){
    res.render('register', {title :'Register', user: req.user});
});

//GET handler for login
router.get('/login', function(req,res,next){
    res.render('login', {title :'Login', failureMessage: '', user: req.user});
});

//handle registrations
router.post('/register', function(req,res,next){
    Account.register(
        new Account({ username: req.body.username}),
        req.body.password,
        function (err, account) {
            if(err){
                console.log(err)
                return res.render('register');
            } else{
                res.redirect('/auth/login')
            }
        }
    )
});

router .post('/login', passport.authenticate('local', {
    successRedirect: '/cars',
    failureRedirect: '/auth/login',
    failureMessage: 'Invalid Login'
}))

//handle logging out
router.get('/logout', function (req,res,next) {
    req.logout();
    res.redirect('/');
})



module.exports = router;
