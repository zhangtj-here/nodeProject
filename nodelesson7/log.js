const fs = require('fs');
const moment = require('moment');
const globalConfig = require('./config');


let fileName = globalConfig.log_path + globalConfig.log_name;
// fs.writeFile(fileName, "asd", function (err, data){

// })
// fs.writeFileSync(fileName, "asd");
function log(data) {
  // console.log(data);
  // fs.writeFile(fileName, data + "\n", {flag: "a"}, function (err, data){});
  fs.appendFile(fileName, data + " (时间:" + moment().format('YYYY MM DD, H:mm:ss a') + ")" + "\n", function (err, data){});

}

module.exports = log;