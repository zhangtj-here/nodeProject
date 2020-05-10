const express = require("express");
const globalConfig = require("./config");
const loader = require("./loader");
const cookie = require("cookie-parser");
const multer = require("multer");
const userMsgDao = require("./dao/userMsgDao");

let app = new express();
app.use(express.static(globalConfig.page_path));
app.use(cookie());

let uploadSingle = multer({dest: "./file/"});

app.get("/api/*", function (request, response, next) {
    // console.log(request.cookies);
    if (request.cookies.id) {
        next();
    } else {
        response.redirect("/login.html");
    }
})

loader.init(app);
// app.get("/queryAllStudent", loader.get("/queryAllStudent"));
// app.post();

app.post("/upload", uploadSingle.single("myfile"), function (request, response) {
    // console.log(request.file.originalname);
    // console.log(request.file.size);
    // console.log(request.file.path);
    // console.log(request.body.name);
    // 比如我要上传一个用户的信息
    // 用户名，用户的头像
    // 头像的图片存放到某个路径下 （某个文件夹下，也是磁盘上）
    // 数据库中存 用户名，用户头像的路径

    userMsgDao.insertUserMsg(request.body.name, request.file.path, request.file.originalname, request.file.size, function (result) {
        console.log(result);
        let resp = {
            path: request.file.path
        }
        response.writeHead(200);
        response.write(JSON.stringify(resp));
        response.end();
    });
})



app.listen(globalConfig.port);