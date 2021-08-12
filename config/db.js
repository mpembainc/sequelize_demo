const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  database: 'sequelize',
  password: '',
  username: 'root',
  dialect: 'mysql',
});

module.exports = sequelize;
