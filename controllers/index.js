/*
 * @Description: Controller
 * @Author: 寒嫣
 * @Date: 2019-01-30 14:09:23
 * @LastEditTime: 2019-01-30 14:56:37
 * @LastEditors: Please set LastEditors
 */

const express = require('express');
const router = express.Router();


var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
let studentRouter = require('../routes/student')

router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/student', studentRouter);

















module.exports = router;