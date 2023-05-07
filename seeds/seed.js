const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const usersData = require('./usersData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(usersData, {
        individualHooks: true,
        returning: true,
    });

    for (const post of postData) {
        const postResponse = await Post.create({
            ...post,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
        for (const comment of commentData) {
            await Comment.create({
                ...comment,
                user_id: users[Math.floor(Math.random() * users.length)].id,
                Post_id: postResponse.dataValues.id
            });
        }
    }


    process.exit(0);
};

seedDatabase();