const router = require('express').Router();

const homeRoutes = require('./homeRoutes.js');

router.use('/', homeRoutes)
router.use('/dashboard', homeRoutes)
router.use('/home', homeRoutes)

module.exports = router;