const router = require('express').Router();
const { User } = require('../../models');
const { Post } = require('../../models');
const { Comment } = require('../../models');

const fs = require('fs')

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
        const userData = await User.findOne({ where: { username: req.body.username } })
        const validPassword = await userData.checkPassword(req.body.password);
        //delete later
        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect password, please try again' });
            return;
        }

        req.session.save(() => {
            console.log(userData)
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData)
        })
    } catch (err) {
        console.log(err)
        console.log(req)
        res.status(400).json(err);
    }
})



router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create(req.body)
        req.session.save(() => {
            console.log(User)
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData)
        })
    } catch (err) {
        res.status(400).json(err);
    }
})



router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
            res.render('/')
        });
    } else {
        res.status(404).end();
    }
});


router.post('/post', async (req, res) => {
    try {

        const postData = await Post.create(req.body)
        req.session.reload(() => {
            req.session.logged_in = true;
            console.log(Post)
            res.status(200).json(Post);
        })
    } catch (err) {
        console.log(err)
        console.log(req)
        res.status(400).json(err);
    }
})


router.post('/comment', async (req, res) => {
    try {
        const commentData = await Comment.create(req.body)
        req.session.reload(() => {
            req.session.logged_in = true;
            console.log(Comment)
            res.status(200).json(Comment);
        })
    } catch (err) {
        console.log(err)
        console.log(req)
        res.status(400).json(err);
    }
})



// router.get('/api/post/:id', async (req, res) => {
//     try {
//         const userData = await Post.findOne({ where: { id: req.params.id } })
//         req.session.reload(() => {
//             req.session.user_id = userData.id;
//             req.session.logged_in = true;
//             console.log(Post)
//         })
//     } catch (err) {
//         console.log(err) 
//         console.log(req)
//         res.status(400).json(err);
//     }
// })




module.exports = router;