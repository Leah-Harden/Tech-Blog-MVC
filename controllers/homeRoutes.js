const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User } = require('../models');



router.get('/', async (req, res) => {
    try {
    const userData = await User.findAll();
    const users = userData.map((user) => user.get({ plain: true }));
    res.render('login', { 
        logged_in: req.session.logged_in 
    });
    } catch(err) {
        console.log(err)
    }
})

router.get('/dashboard', async (req, res) => {
    try {
    const userData = await User.findByPk(req.session.user_id);

    const users = userData.get({ plain: true });
    res.render('dashboard', { 
        logged_in: req.session.logged_in,
        users
    });
    } catch(err) {
        console.log(err)
    }
});

router.get('/home', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id);

        const users = userData.get({ plain: true });
    res.render('home', { 
        logged_in: req.session.logged_in,
        users
    });
    } catch(err) {
        console.log(err)
    }
});


module.exports = router;