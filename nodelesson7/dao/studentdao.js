const dbutil = require("./dbutil");


function queryAllStudent(success) {
  let querySql =  "select * from students;";
  let connection = dbutil.createConnection();
  connection.connect();
  connection.query(querySql, function (error, result) {
    if (result != null) {
      // console.log(result);
      success(result);
    } else {
      console.log(error);
    }
  })
  connection.end();
}

function queryStudentsByClassAndAge(classNum, age) {
  // let querySql =  "select * from students where class = " + classNum + ";";
  let querySql =  "select * from students where class = ? and age = ?;" ;
  let connection = dbutil.createConnection();
  connection.connect();
  connection.query(querySql, [classNum, age], function (error, result) {
    if (result != null) {
      console.log(result);
    } else {
      console.log(error);
    }
  })
  connection.end();
}


function queryStudentsByStuNum(stuNum, success) {
  let querySql =  "select * from students where stu_num = ?;";
  let connection = dbutil.createConnection();
  connection.connect();
  connection.query(querySql, stuNum, function (error, result) {
    if (result != null) {
      success(result);
    } else {
      console.log(error);
    }
  })
  connection.end();
}

// queryAllStudent();
// queryStudentsByClass(3, 2);
module.exports = {
  "queryAllStudent": queryAllStudent,
  "queryStudentsByClassAndAge": queryStudentsByClassAndAge,
  "queryStudentsByStuNum": queryStudentsByStuNum
}
