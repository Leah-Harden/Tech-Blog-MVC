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
        validate: {
            len: [8]
        }
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
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
    }

)

module.exports = Post;