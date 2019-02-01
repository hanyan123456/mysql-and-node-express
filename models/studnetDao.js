/*
 * @Author: 寒嫣
 * @Date: 2019-01-30 14:30:17
 * @Description: 查询所有学生
 */

const dbutil = require('./dbutil');
const connection = dbutil.createConnection();
connection.connect();

//查询
function queryStudent(queryStudentStr, success) {
    connection.query(queryStudentStr, (error, result) => {
        if (error == null) {
            success(result)
        } else {
            throw new Error(error);
        }
    })
};
//添加
function addStudents(addStudentCon, name, age, password, success) {
    let params = [name, age, password]
    connection.query(addStudentCon, params, (error, result) => {
        if (error == null) {
            success(result)
        } else {
            throw new Error(error)
        }
    })
};
//修改1
function upstateStudent(upstateStudentCon, age, password, name, id, success) {
    let params = [age, password, name, id];
    connection.query(upstateStudentCon, params, (error, result) => {
        if (error == null) {
            success(result)
        } else {
            throw new Error(error)
        }
    })
};
//修改2
function changetudentInfo(upstateStudentInfo, password, name, id, success) {
    let params = [name, id, password];
    connection.query(upstateStudentInfo, params, (error, result) => {
        if (error == null) {
            success(result)
        } else {
            throw new Error(error)
        }
    })
}
module.exports = {
    queryStudent,
    addStudents,
    upstateStudent,
    changetudentInfo
}