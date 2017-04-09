const express = require('express');
const router = express.Router();
const db = require('../models/todo');
const contTodo = require('../controllers/todo');

router.get('/todo', contTodo.getAll)
router.post('/todo', contTodo.createTodo)
router.put('/todo/:id', contTodo.editTodo)
router.delete('/todo/:id', contTodo.deleteTodo)
router.put('/todo/complete/:id', contTodo.completeTodo)
router.put('/todo/uncomplete/:id', contTodo.uncompleteTodo)



module.exports = router
