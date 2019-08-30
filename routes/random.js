var express = require('express');
var router = express.Router();
var app = express();
var crud = require('../controllers/crudController');
//Chat route
router.get('/', (req, res, next) => {
	res.sendFile(app.get('views')+'/chat.html');
});

router.post('/blog', crud.create);

router.get('/blog', crud.index)

module.exports = router;