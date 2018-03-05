const express = require('express');
const app = express();
const db = require('./database');

const ArticleController = require('./ArticleController');
app.use('/articles', ArticleController);

module.exports = app;
