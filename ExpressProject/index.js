const express = require("express");
const globalConfig = require("./config");

let app = new express();
app.use(express.static(globalConfig.page_path));
app.listen(globalConfig.port);