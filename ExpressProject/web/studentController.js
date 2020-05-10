const url = require("url");
let studentDao = require("../dao/studentDao");
let path = new Map();


function queryAllStudent(request, response) {
    studentDao.queryAllStudent(function (result) {
        response.writeHead(200);
        response.write(JSON.stringify(result));
        response.end();
        // console.log(result);
    })
}

path.set("/api/queryAllStudent", queryAllStudent);

function insertStudent(request, response) {
    let params = url.parse(request.url, true).query;
    studentDao.insertStudent(params.stuNum, params.name, params.age, params.stuClass, params.pwd, function(result) {
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write("添加成功");
        response.end();
    })
}

path.set("/api/insertStudent", insertStudent);

module.exports.path = path;