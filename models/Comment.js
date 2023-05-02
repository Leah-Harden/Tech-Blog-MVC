const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {


}
Comment.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.UUID,
        references: {
            model:'User',
            key:'id'
        }
    },
    Post_id: {
        type: DataTypes.UUID,
        references: {
            model:'Post',
            key:'id'
        }
    },
    data: {
        type: DataTypes.DATE,

    },
    body: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    },
},
{
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }

)

module.exports = Comment;