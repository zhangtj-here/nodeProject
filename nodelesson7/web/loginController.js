const studentService = require("../service/studentService");
const url = require("url");
let path = new Map();

function getData(request, response) {
  // console.log(request.url);
  // throw new Error("服务器错误");
  studentService.queryAllStudent(function (result) {
    response.writeHead(200);
    let resArr = [];
    for (let i = 0; i < result.length; i++) {
      resArr.push(result[i].name);
    }
    // response.write(JSON.stringify(resArr));
    response.write(resArr.toString());
    response.end();
  });


}
path.set("/getData", getData);
function login(request, response) {
  let parmas = url.parse(request.url, true).query;
  request.on("data", function(data) {
    let stuNum = data.toString().split("&")[0].split("=")[1];
    let password = data.toString().split("&")[1].split("=")[1];
    studentService.queryStudentsByStuNum(stuNum, function (result) {
      // console.log(result);
      let res = "";
      if (result == null || result.length ==0) {
        res = "fail";
        response.writeHead(302, {"location": "/error.html"});
        response.end();
      } else {
        if (result[0].pwd == password) {
          res = "ok";
          response.writeHead(302, {"location": "/main.html", "Set-Cookie": "id=" + result[0].id});
          response.end();
        } else {
          res = "fail";
          response.writeHead(302, {"location": "/error.html"});
          response.end();
        }
      }
      // response.write(res);
      // response.end();

    })
  })
}
path.set("/login", login);
module.exports.path = path;