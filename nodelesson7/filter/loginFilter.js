const url = require("url");
const globalConfig = require("../config");

function loginFilter(request, response) {
    let pathname = url.parse(request.url).pathname;
        console.log(pathname);
    if (pathname == "/login.html" || pathname == "/login" || isStaticsRequest(pathname)) {
        console.log("放行");
        return true;
    }

    if (request.headers.cookie) {
        let cookies = request.headers.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            if (cookies[i].split("=")[0].trim() == "id") {
                return true
            }
        }
    }
    console.log("拦截");
    response.writeHead(302, {"location": "/login.html"});
    response.end();
    return false;
}

function isStaticsRequest(pathName) {
    for (let i = 0; i < globalConfig.static_file_type.length; i++) {
        let temp = globalConfig.static_file_type[i];
        if (temp == ".html") {
            continue;
        }
        if (pathName.indexOf(temp) == pathName.length - temp.length) {
            return true;
        }
    }
    return false;
}

module.exports = loginFilter;

