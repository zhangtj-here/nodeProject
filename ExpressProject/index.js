const express = require("express");
const globalConfig = require("./config");
const loader = require("./loader");

let app = new express();
app.use(express.static(globalConfig.page_path));

app.get("/api/*", function (requset, response, next) {
    console.log("=====");
    next();
})

loader.init(app);
// app.get("/queryAllStudent", loader.get("/queryAllStudent"));
// app.post();


app.listen(globalConfig.port);