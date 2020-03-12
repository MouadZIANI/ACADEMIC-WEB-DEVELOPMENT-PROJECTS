var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');

var app = express();

// Plugins and Middleware configurations
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

// DB configuration
mongoose.connect('mongodb://localhost/blog-cms', {
    promiseLibrary: require('bluebird'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log('connection successful'))
    .catch((err) => console.error(err));

// Routes configurations: Importation
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var auth = require('./routes/auth');
var category = require('./routes/category');
var post = require('./routes/post');

// Routes configurations: Assign route to urls pattern
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/auth', auth);
app.use('/api/category', category);
app.use('/api/post', post);


module.exports = app;
