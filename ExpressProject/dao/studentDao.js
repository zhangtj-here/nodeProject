const dbutil = require("./dbutil");

function insertStudent(stuNum, name, age, stuClass, pwd, success) {
    let insertSql = "insert into students(stu_num, name, age, class, pwd) values(?, ?, ?, ?, ?);";
    let params = [stuNum, name, age, stuClass, pwd];
    let connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function(error, result) {
        if (error == null) {
            console.log(result);
            success(result);
        } else {
            throw new Error(error);
        }
    })
    connection.end();
}

function queryAllStudent(success) {
    let querySql = "select * from students;";
    let connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, function(error, result) {
        if (error == null) {
            console.log(result);
            success(result);
        } else {
            throw new Error(error);
        }
    })
    connection.end();
}




module.exports = {
    "queryAllStudent": queryAllStudent,
    "insertStudent": insertStudent
}