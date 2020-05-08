const fs = require("fs");
const globalConfig = require("./config");

let controllerSet = [];
let pathMap = new Map();

let files = fs.readdirSync(globalConfig["web_path"]);
// console.log(files);
for (let i = 0; i < files.length; i++) {
  let temp = require("./" + globalConfig["web_path"] + files[i]);
  if (temp.path) {
    for (var [k,v] of temp.path) {
      if (!pathMap.get(k)) {
        pathMap.set(k, v);
      } else {
        throw new Error("url path异常,url:" + k);
      }
    }
    controllerSet.push(temp);
  }
}

module.exports = pathMap;