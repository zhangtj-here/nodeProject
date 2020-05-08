const fs = require('fs');

let globalConfig = {};
let conf = fs.readFileSync("./server.conf");
let confArr = conf.toString().split("\r\n");
for (let i = 0; i < confArr.length; i++) {
  let tempArr = confArr[i].split("=");
  if (tempArr.length < 2) {
    continue;
  } else {
    globalConfig[tempArr[0]] = tempArr[1];
  }
}

if (globalConfig.static_file_type) {
  globalConfig.static_file_type = globalConfig.static_file_type.split("|");
} else {
  throw new Error("配置文件异常，缺少:static_file_type");
}

module.exports = globalConfig;