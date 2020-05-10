const dbutil = require("./dbutil");

function insertUserMsg(name, picPath, originName, picSize, success) {
    let insertSql = "insert into user_msg(name, pic_path, origin_name, pic_size) values(?, ?, ?, ?);";
    let params = [name, picPath, originName, picSize];
    let connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function(error, result) {
        if (error == null) {
            console.log(result);
            success(result);
        } else {
            throw new Error(error);
        }
    })
    connection.end();
}

module.exports = {
    "insertUserMsg": insertUserMsg
}