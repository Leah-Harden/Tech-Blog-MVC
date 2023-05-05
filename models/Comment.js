const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {


}
Comment.init({
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
    // username: {
    //     type:DataTypes.STRING,
    //     references: {
    //         model:'User',
    //         key:'username'
    //     }
    // },
    Post_id: {
        type:DataTypes.INTEGER,
        references: {
            model:'Post',
            key:'id'
        }
    },
    date: {
        type: DataTypes.DATE,

    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
    }

},
{
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Comment'
    }

)

module.exports = Comment;