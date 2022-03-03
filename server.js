const express = require('express');
const routes = require('./routes');
const db = require('./db');
const logger = require('morgan')  //debugger tool

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json()) //added after line 4
app.use(express.urlencoded( { extended: false})); //added after line 4
app.use(logger('dev')) //added after line 4

app.use('/api', routes); //on like 2

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`))