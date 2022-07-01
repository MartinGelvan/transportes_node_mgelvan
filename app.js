var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config(); // para que cargue los datos del archivo env

var indexRouter = require('./routes/index'); // routes/index.js
//var usersRouter = require('./routes/users');
var nosotrosRouter = require('./routes/nosotros'); // routes/nosotros.js  paso 1
var serviciosRouter = require('./routes/servicios'); // routes/servicios.js  paso 1
var galeriaRouter = require('./routes/galeria'); // routes/galeria.js  paso 1
var novedadesRouter = require('./routes/novedades'); // routes/novedades.js  paso 1
var contactoRouter = require('./routes/contacto'); // routes/contacto.js  paso 1


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/nosotros', nosotrosRouter); // paso 2
app.use('/servicios', serviciosRouter); // paso 2
app.use('/galeria', galeriaRouter); // paso 2
app.use('/novedades', novedadesRouter); // paso 2
app.use('/contacto', contactoRouter); // paso 2

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
