var express = require('express');
var router = express.Router();

//Chat route
router.get('/', (req, res, next) => {
	res.render('chat', { title: 'Chat'});
});

router.post('/messgae', (req, res, next) => {
	var msg = res.body.message;
	if( _.isUndefined(msg) || _.isEmpty(msg.trim()) ) {
		return res.json(400, {error: 'Message is invalid'});
	}

	res.json(200, {message: "Message recieved"});
});

module.exports = router;