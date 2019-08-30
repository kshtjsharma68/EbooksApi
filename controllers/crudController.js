var express = require('express');
var app = express();
var Blog = require('../models/blog');

exports.create = (req, res, next) => {
	let status = 400;
	if (req.title && req.message) {
		const blog  = new Blog();
		blog.title  = req.title;
		blog.text   = req.message; 
		blog.save((err) => {
			if(err) console.log(err)
				console.log('data saved')
		})
	} 
}

exports.create = (req, res, next) => {
	let {message, title} = req.body;
	if( typeof message == 'undefined' || !message.length ) {
		return res.json(400, {error: 'Message is invalid', message});
	}
	if (title && message) {
		const blog  = new Blog();
		blog.title  = req.title;
		blog.text   = req.message;
		blog.save((err) => {console.log('indes')
			if(!err) console.log('data saved')	
		})
	}

	let blogs = getAllBlogs();

	res.status(200).json({blogs});
	
}

const getAllBlogs = _ => {
	return Blog.find({}).exec((err, blogs) => blogs);
}

exports.index = (req, res, next) => {
		let blogs = getAllBlogs();	
	    res.render('blog', {status: 200, blogs}); 
}