const router = require('express').Router();
const { User } = require('../../models');
const { Comment } = require('../../models');

router.post('/comment', async (req, res) => {
    try {
        const CommentData = await Comment.create(req.body)

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData)
        })
    } catch (err) {
        res.status(400).json(err);
    }
})


router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.username } })

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData)
        })
    } catch (err) {
        res.status(400).json(err);
    }
})


router.post('/signup', async (req, res) => {
    try {
    const userData = await User.create(req.body)
        
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData)
        })
    } catch (err) {
        res.status(400).json(err);
    }
})


//fix this logout fuction
router.post('/logout', async (req, res) => {
    try {
        req.session.destroy(() => {
            req.session.logged_in
        })
        res.status(200).json(userData)
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;