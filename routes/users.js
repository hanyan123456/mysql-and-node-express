/*
 * @Author: 寒嫣
 * @Date: 2019-01-30 14:00:26
 * @Description: users router api
 */
var express = require('express');
var Router = express.Router();

/* GET users listing. */
Router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = Router;