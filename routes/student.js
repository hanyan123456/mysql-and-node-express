/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-01-30 14:14:48
 * @LastEditTime: 2019-02-01 13:33:47
 * @LastEditors: Please set LastEditors
 */
const express = require('express');
const router = express.Router();
const studentDao = require('../models/studnetDao')
//获取接口
router.get('/', (req, res) => {
    let queryStudentSql = 'select * from test;';
    studentDao.queryStudent(queryStudentSql, (result) => {
        res.send({
            message: "success",
            result: result
        })
    })
});

//增加接口
router.post('/addStudent', (req, res) => {
    let insertStudent = 'insert into test (name,age,password) values(?,?,?);';
    let name = req.body.name;
    let age = req.body.age;
    let password = req.body.password;
    studentDao.addStudents(insertStudent, name, age, password, (result) => {
        res.send({
            message: 'success',
            result: result
        })
    })
});
//修改接口
router.put('/updataStudnet', (req, res) => {
    let modifyStudent = 'update test set age = ?, password = ? where name = ?and id=?;';
    // let modifyStudent = 'update test set(age,password) where name=? or password=?;';
    let age = req.body.age;
    let name = req.body.name;
    let password = req.body.password;
    let id = req.body.id;
    studentDao.upstateStudent(modifyStudent, age, password, name, id, (result) => {
        res.send({
            message: 'message',
            result: result
        })
    })
});

//修改接口1
router.put('/changeStudent', (req, res) => {
    // let changeStudentInfos = 'upstate test set password=? where name=?and id=?;';
    let changeStudentInfos = 'update test set password=? where name=?and id=?;';
    let password = req.body.password;
    let name = req.body.name;
    let id = req.body.id;
    studentDao.changetudentInfo(changeStudentInfos, password, name, id, (result) => {
        res.send({
            message: 'message',
            result: result,
        })
    })

})
module.exports = router;