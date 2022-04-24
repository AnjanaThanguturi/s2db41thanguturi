var express = require('express');
const icecream_controllers = require('../controllers/icecream');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET home page. */
router.get('/', icecream_controllers.icecream_view_all_Page);

/* GET detail icecream page */
router.get('/detail', icecream_controllers.icecream_view_one_Page);

/* GET create icecream page */
router.get('/create', icecream_controllers.icecream_create_Page);

/* GET create update page */
router.get('/update', secured, icecream_controllers.icecream_update_Page);

/* GET delete delete page */
router.get('/delete', icecream_controllers.icecream_delete_Page);



module.exports = router;