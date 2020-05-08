const studentDao = require("../dao/studentdao");

function queryAllStudent(success) {
  studentDao.queryAllStudent(success);
}

function queryStudentsByStuNum(stuNum, success) {
  studentDao.queryStudentsByStuNum(stuNum, success);
}

// queryAllStudent();

module.exports = {
  "queryAllStudent": queryAllStudent,
  "queryStudentsByStuNum": queryStudentsByStuNum
}
