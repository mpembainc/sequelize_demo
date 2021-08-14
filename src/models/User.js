const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Post = require('./Post');

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
});

User.hasMany(Post, { as: 'posts', foreignKey: 'userId' });
Post.belongsTo(User);

module.exports = User;
