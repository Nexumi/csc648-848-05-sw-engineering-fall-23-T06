var express = require('express');
var router = express.Router();
var db = require('../conf/database');
/*const {successPrint, errorPrint} = require('../helpers/debug/debugprinters');
const UserError = require('../helpers/error/UserError'); */
var bcrypt = require('bcrypt');
/*var isLoggedIn = require('../middleware/routeprotectors').userIsLoggedIn;
const {getRecentPosts, getPostById, getCommentsByPostId} = require('../middleware/postsmiddleware'); */

router.get('/login',(req, res, next) => {
	res.render("login", {title: "Log In Page"});
});

router.get('/registration',(req, res, next) => {
	res.render("registration", {title: "Registration Page"});
});

router.get('/homepage',(req, res, next) => {
	res.render("homepage", {title: "The Home Page"});
});

module.exports = router;