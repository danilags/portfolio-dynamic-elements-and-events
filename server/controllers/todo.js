const db = require('../models/todo')


let createTodo = function(req, res) {
  db.create({
    title  : req.body.title,
    status : false
  }).then(function(todo) {
    res.send(todo)
  })
  .catch(function(err) {
    res.send(err)
  })
}

let getAll = function(req, res) {
  db.find(function(err, todos) {
    res.send(todos)
  })
}

let editTodo = function(req, res) {
  db.findById(req.params.id).then(function(todo) {
    if (!todo) {
      res.send('Todo is not define !')
    } else {
      todo.update(req.body).then(function(result) {
        res.send(result)
      }).catch(function(err) {
        res.send(err)
      })
    }
  })
}

let deleteTodo = function(req, res) {
  db.findByIdAndRemove(req.params.id, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send('Data success deleted !')
    }
  })
}

let completeTodo = function(req, res) {
  db.findByIdAndUpdate(req.params.id, {
    $set : {
      status : true
    }
  }, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}

let uncompleteTodo = function(req, res) {
  db.findByIdAndUpdate(req.params.id, {
    $set : {
      status : false
    }
  }, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}

module.exports = {
  createTodo,
  getAll,
  editTodo,
  deleteTodo,
  completeTodo,
  uncompleteTodo
}
