const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/db');

// Other way of creating a model

class Product extends Model {}

Product.init(
  {
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
  },
  { sequelize, modelName: 'Product' }
);

module.exports = Product;
