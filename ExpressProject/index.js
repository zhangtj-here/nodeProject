const express = require("express");
const globalConfig = require("./config");
const loader = require("./loader");
const cookie = require("cookie-parser");

let app = new express();
app.use(express.static(globalConfig.page_path));
app.use(cookie());

app.get("/api/*", function (request, response, next) {
    // console.log(request.cookies);
    if (request.cookies.id) {
        next();
    } else {
        response.redirect("/login.html");
    }
})

loader.init(app);
// app.get("/queryAllStudent", loader.get("/queryAllStudent"));
// app.post();


app.listen(globalConfig.port);