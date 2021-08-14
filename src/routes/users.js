const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Insert
router.post('/', async (req, res) => {
  try {
    const user = await User.create({
      firstName: req.body.fname,
      lastName: req.body.lname,
    });

    res.status(201).send({ user });
  } catch (error) {
    console.log(error);
  }
});

// Select
router.get('/', async (_, res) => {
  try {
    const users = await User.findAll();

    res.send({ users });
  } catch (error) {
    console.log(error);
  }
});

// Select By ID
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id); //find by primary key
    // const user = await User.findOne({ where: { firstName: 'Hussein' } }); //find by any column
    const posts = await user.getPosts();
    res.send({ user, posts });
  } catch (error) {
    console.log(error);
  }
});

// UPDATE Data
router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);

    if (!user) return res.status(404).send({ error: 'User not found' });

    await User.update(req.body, { where: { id } });
    res.send({ message: 'User has been updated' });
  } catch (error) {
    console.log(error);
  }
});

// DELETE Data
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const rows = await User.destroy({ where: { id } });
    res.send({ message: 'Deleted ' + rows + ' rows' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
