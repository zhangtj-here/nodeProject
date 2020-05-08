const fs = require("fs");
const globalConfig = require("./config");

let filterSet = [];
// let pathMap = new Map();

let files = fs.readdirSync(globalConfig["filter_path"]);
// console.log(files);
for (let i = 0; i < files.length; i++) {
    let temp = require("./" + globalConfig["filter_path"] + files[i]);
    filterSet.push(temp);
    // if (temp.path) {
    //     for (var [k,v] of temp.path) {
    //         if (!pathMap.get(k)) {
    //             pathMap.set(k, v);
    //         } else {
    //             throw new Error("url path异常,url:" + k);
    //         }
    //     }
    //     controllerSet.push(temp);
    // }
}

module.exports = filterSet;