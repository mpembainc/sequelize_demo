const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.post('/', async (req, res) => {
  try {
    const product = await Product.create({
      name: 'Samsung Galaxy S11',
      price: 270000,
    });
    res.send({ product });
  } catch (error) {
    console.log(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.send({ products });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
