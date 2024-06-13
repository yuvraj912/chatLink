const Router = require('express');
const test = require('../controllers/user.controllers.js');
const display = require('../controllers/user.controllers.js');

const router = Router()

router.route("/").get(display);
router.route("/test").get(test);


module.exports = router;