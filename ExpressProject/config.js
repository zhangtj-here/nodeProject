const fs = require("fs");

let globalConfig = {};

let conf = fs.readFileSync("./server.conf");

let configArr = conf.toString().split("\n");

for (let i = 0; i < configArr.length; i++) {
    let temp = configArr[i].split("=");
    globalConfig[temp[0]] = temp[1].trim();
}

module.exports = globalConfig;