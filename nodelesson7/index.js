const http = require("http");
const url = require("url");
const fs = require("fs");
const globalConfig = require("./config");
const loader = require("./loader");
const filterSet = require("./filterLoader");
const log = require("./log");

http.createServer(function(request, response) {
  var path = url.parse(request.url, true);
  // console.log(path);
  // console.log(request.url);
  let pathName = path.pathname;
  let parmas = path.query;
  let isStatic = isStaticsRequest(pathName);

  log(pathName);

  for (let i = 0; i < filterSet.length; i++) {
    let flag = filterSet[i](request, response);
    if (!flag) {
      return;
    }
  }


  if (isStatic) { //请求静态文件
    try {
      // let data = fs.readFileSync(__dirname + globalConfig["page_path"] + pathName);
      let data = fs.readFileSync(globalConfig["page_path"] + pathName);
      response.writeHead(200);
      response.write(data);
      response.end();
    } catch(e) {
      response.writeHead(404);
      response.write("<html><body><h1>404 NotFound</h1></body></html>");
      response.end();
    }
    
  } else { //请求动态数据
    if(loader.get(pathName) != null) {
      // loader.get(pathName)(request, response);
      try {
        loader.get(pathName)(request, response);
      } catch(e) {
        response.writeHead(500);
        response.write("<html><body><h1>500 BadServerServer </h1></body></html>");
        response.end();
      }
    } else {
      response.writeHead(404);
      response.write("<html><body><h1>404 NotFound</h1></body></html>");
      response.end();
    }
    // console.log(pathName);
  }
}).listen(globalConfig["port"]);
log("服务已启动");

function isStaticsRequest(pathName) {
  // console.log(globalConfig)
  for (let i = 0; i < globalConfig.static_file_type.length; i++) {
    let temp = globalConfig.static_file_type[i];
    if (pathName.indexOf(temp) == pathName.length - temp.length) {
      return true;
    }
  }
  return false;
}