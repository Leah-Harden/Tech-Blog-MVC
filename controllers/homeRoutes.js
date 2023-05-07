const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User } = require('../models');
const { Post } = require('../models');
const { Comment } = require('../models');

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
router.get('/home', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        const userData = await User.findByPk(req.session.user_id);
        const users = userData.get({ plain: true });
        const posts = postData.map((post) => post.get({ plain: true }));
        const result = posts.filter( post => post.user_id == users.id)
        
        res.render('home', {
            result,
            logged_in: req.session.logged_in,
            users
        });
    } catch (err) {
        console.log(err)
    }
});

router.get('/project/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const post = postData.get({ plain: true });
        const userData = await User.findByPk(req.session.user_id);;
        const users = userData.get({ plain: true });
        
        
        const commentData = await Comment.findAll();
        const commentsChecked = commentData.filter( comment => comment.user_id == post.id);
        const comments = commentsChecked.map((comment) => comment.get({ plain: true }));
        console.log(commentData)
        res.render('project', {
            logged_in: req.session.logged_in,
            post,
            users,
            comments
        });
    } catch (err) {
        console.log(err)
    }
});


module.exports = router;