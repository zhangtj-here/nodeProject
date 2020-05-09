let fs = require("fs");

let path = new Map();

function testFileUpload(request, response) {
    console.log("文件发送过来了");
    request.on("data", function (data) {
        let fis = fs.createWriteStream("./file/01.jpg");
        console.log(data.toString());
        fis.write(data);
        fis.end();
        response.end();
    })
}

path.set("/testFileUpload", testFileUpload);
module.exports.path = path;