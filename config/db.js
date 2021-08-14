const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  database: 'aiman',
  password: '',
  username: 'root',
  dialect: 'mysql',
});

module.exports = sequelize;
