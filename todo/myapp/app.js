const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const url = require('url');

const app = express();

const dirname = path.resolve(); 

app.set('view engine', 'ejs');
app.set('views', path.join(dirname, 'views'));

app.use('/', indexRouter);

app.listen(3000, () => {
    console.log('App listening on port 3000');
});

module.exports = app;