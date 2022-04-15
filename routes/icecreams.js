var express = require('express');
const icecream_controllers= require('../controllers/icecream');
var router = express.Router();

/* GET home page. */
router.get('/', icecream_controllers.icecream_view_all_Page);
/* GET detail icecream page */
router.get('/detail', icecream_controllers.icecream_view_one_Page);
module.exports = router;