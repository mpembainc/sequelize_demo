const express = require('express');
const app = express();
const sequelize = require('./config/db');

// Routes
const userRouter = require('./src/routes/users');
const prodRouter = require('./src/routes/products');

app.use(express.json());

(async () => {
  await sequelize.sync();

  // Here we gooooooooo
  // users routers
  app.use('/api/users', userRouter);
  // Products routers
  app.use('/api/products', prodRouter);
})();

app.get('/', (_, res) => {
  res.send('Hello Sequelize');
});

app.listen(3000, () => console.log('Server is up and running...'));
