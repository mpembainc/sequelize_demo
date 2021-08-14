const express = require('express');
const Post = require('../models/Post');
const router = express.Router();
const User = require('../models/User');

// Insert
router.post('/', async (req, res) => {
  try {
    const post = await Post.create({ ...req.body, userId: 1 });
    res.status(201).send({ post });
  } catch (error) {
    console.log(error);
  }
});

// Select
router.get('/', async (_, res) => {
  try {
    const user = await User.findByPk(1);
    const posts = await user.getPosts();

    res.send({ posts });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
