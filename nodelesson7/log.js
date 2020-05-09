const fs = require('fs');
const moment = require('moment');
const globalConfig = require('./config');


let fileName = globalConfig.log_path + globalConfig.log_name;
// fs.writeFile(fileName, "asd", function (err, data){

// })
// fs.writeFileSync(fileName, "asd");

function nowDate() {
  let formatDate = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
  return formatDate + " " + Date.now() + " ";
}
function log(data) {
  // console.log(data);
  // fs.writeFile(fileName, data + "\n", {flag: "a"}, function (err, data){});
  // fs.appendFile(fileName, data + " (时间:" + moment().format('YYYY MM DD, H:mm:ss a') + ")" + "\n", function (err, data){});
  fs.appendFile(fileName, nowDate() + data + "\n", {flag: "a"}, function (err, data){});

}

module.exports = log;