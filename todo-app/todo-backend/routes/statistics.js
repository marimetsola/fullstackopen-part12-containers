const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();
const {getAddedTodos} = require('../redis/')

router.get('/', async (_, res) => {
  const addedTodos = await getAddedTodos()
  res.send({"added_todos": addedTodos});
});

module.exports = router;