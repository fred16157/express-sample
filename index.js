var express = require('express')();
var path = require('path');
var bodyParser = require('body-parser');
express.set('trust proxy', true);
express.use(bodyParser.json());
express.use(bodyParser.urlencoded({ extended: false}));

express.set('views', path.join(__dirname, 'views'));
express.set('view engine', 'ejs');

express.get('/', (req, res) => {
    res.render('index');
});