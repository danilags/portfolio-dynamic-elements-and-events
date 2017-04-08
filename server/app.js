const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const index = require('./routes/index');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/api', index)

mongoose.connect('mongodb://localhost/todo')
mongoose.connection.on('connected', function() {
  console.log('Mongodb is connected !');
})

app.listen(3000, function() {
  console.log('App is running !');
})
