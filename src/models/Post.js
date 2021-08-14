const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const { STRING, TEXT } = DataTypes;

const Post = sequelize.define('Post', {
  title: {
    type: STRING,
  },
  body: {
    type: TEXT,
  },
});

module.exports = Post;
