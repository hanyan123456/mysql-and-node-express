/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-01-30 14:00:26
 * @LastEditTime: 2019-02-01 17:03:26
 * @LastEditors: Please set LastEditors
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express Haha'
  });
});

module.exports = router;