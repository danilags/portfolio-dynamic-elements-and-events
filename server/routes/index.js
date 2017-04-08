const express = require('express');
const router = express.Router();
const db = require('../models/todo');
const contTodo = require('../controllers/todo');

router.get('/todo', contTodo.getAll)
router.post('/todo', contTodo.createTodo)
router.put('/todo/:id', contTodo.editTodo)
router.delete('/todo/:id', contTodo.deleteTodo)



module.exports = router
