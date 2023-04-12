const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {


}
Post.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.UUID,
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