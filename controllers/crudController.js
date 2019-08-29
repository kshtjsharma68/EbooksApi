var express = require('express');
var app = express();
var Blog = require('../models/blog');

exports.create = (req, res, next) => {
	console.log('inside controller')
}

exports.index = (req, res, next) => {
	let blogs = Blog.find();
	return res.render('blog', {status: 200, blogs});
}