const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User } = require('../models');
const { Post } = require('../models');

//localhost 3001 nothing
router.get('/', async (req, res) => {
    try {
        res.render('start', {
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err)
    }
});


//localhost 3001 login
router.get('/login', async (req, res) => {
    try {
        res.render('login', {
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err)
    }
})


//localhost/3001/dashboard 
router.get('/dashboard', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));
        const userData = await User.findByPk(req.session.user_id);
        const users = userData.get({ plain: true });
        res.render('dashboard', {
            posts,
            logged_in: req.session.logged_in,
            users
        });
    } catch (err) {
        console.log(err)
    }
});

//localhost/3001/home 
router.get('/home', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));
        const userData = await User.findByPk(req.session.user_id);

        const users = userData.get({ plain: true });
        res.render('home', {
            posts,
            logged_in: req.session.logged_in,
            users
        });
    } catch (err) {
        console.log(err)
    }
});

router.get('/project/:id', async (req, res) => {
    try {
        const projectData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        const userData = await User.findByPk(req.session.user_id);
        const users = userData.get({ plain: true });
        const project = projectData.get({ plain: true });
        res.render('project', {
            logged_in: req.session.logged_in,
            project,
            users
        });
    } catch (err) {
        console.log(err)
    }
});


module.exports = router;