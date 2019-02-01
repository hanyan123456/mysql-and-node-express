/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-01-30 14:00:26
 * @LastEditTime: 2019-01-30 14:55:48
 * @LastEditors: Please set LastEditors
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

module.exports = router;