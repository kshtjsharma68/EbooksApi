const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Blog = new Schema(
	{
		id: Number,
		title: String,
		text: String,
	},
	{timestamps: true}
	);

module.exports = mongoose.model('Blog', Blog);