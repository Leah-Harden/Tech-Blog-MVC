const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {


}
Post.init({
    id: {
        type:DataTypes.INTEGER,

        primaryKey: true,
        allowNull: false,
        autoIncrement: true,

    },
    user_id: {
        type:DataTypes.INTEGER,
        references: {
            model:'User',
            key:'id'
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
    },
},
{
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Post'
    },
    // {

    //     hooks: {
    //         // set up beforeCreate lifecycle "hook" functionality
    //         beforeCreate: async (dateData) => {
    //             dateData.date = await new Date();
    //             return dateData;
    //         },

    //         beforeCreate: async (userData) => {
    //             userData.user_id = await users.username
    //             return userData;
    //         },
    //     }
    // }
)

module.exports = Post;