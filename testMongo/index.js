let mongo = require("mongodb").MongoClient;

let url = "mongodb://127.0.0.1:27017/test2";

function insert(collection, obj, callback) {
    mongo.connect(url, function (error, db) {
        if (error == null) {
            let database = db.db("test2");
            database.collection(collection).insertOne(obj, callback);
            db.close();
        } else {
            console.log(error);
        }
    });
}

function insertMany(collection, objs, callback) {
    mongo.connect(url, function (error, db) {
        if (error == null) {
            let database = db.db("test2");
            database.collection(collection).insertMany(objs, callback);
            db.close();
        } else {
            console.log(error);
        }
    });
}

function find(collection, where, callback) {
    mongo.connect(url, function (error, db) {
        if (error == null) {
            let database = db.db("test2");
            database.collection(collection).find(where).toArray(callback);
            db.close();
        } else {
            console.log(error);
        }
    });
}


function update(collection, where, update, callback) {
    mongo.connect(url, function (error, db) {
        if (error == null) {
            let database = db.db("test2");
            database.collection(collection).updateOne(where, update, callback);
            db.close();
        } else {
            console.log(error);
        }
    });
}


function deleteData(collection, where, callback) {
    mongo.connect(url, function (error, db) {
        if (error == null) {
            let database = db.db("test2");
            database.collection(collection).deleteOne(where, callback);
            db.close();
        } else {
            console.log(error);
        }
    });
}

// mongo.connect(url, function (error, db) {
//     if (error == null) {
//         let database = db.db("test2");
//         // database.createCollection("teacher", function (error, res) {
//         //     if (error == null) {
//         //         console.log(res);
//         //     } else {
//         //         console.log(error);
//         //     }
//         // })
//
//         let obj = {
//             name: "panda1",
//             age: 23,
//             sex: 1
//         }
//         database.collection("students").insertOne(obj, function (error, res) {
//             if (error == null) {
//                 console.log(res);
//             } else {
//                 console.log(error);
//             }
//             db.close();
//         })
//         // console.log(db);
//     } else {
//         console.log(error);
//     }
//     // db.close();
// });
// insertMany("students", [{name: "panda1",  age:23, sex:0}, {name:"panda1",age:23,sex:0}], function (error, res) {
//     if (error == null) {
//         console.log(res);
//     } else {
//         console.log(error);
//     }
// });

// find("students", {age: {$lte:19}},function(error, res) {
//     if (error == null) {
//         console.log(res);
//     } else {
//         console.log(error);
//     }
// })

// update("students", {name: "panda"}, {$set: {age: 18}}, function (error, res) {
//     if (error == null) {
//         console.log(res);
//     } else {
//         console.log(error);
//     }
// })

// deleteData("students", {name: "panda1"}, function (error, res) {
//     if (error == null) {
//         console.log(res);
//     } else {
//         console.log(error);
//     }
// })

module.exports.insert = insert;
module.exports.insertMany = insertMany;
module.exports.update = update;
module.exports.find = find;
module.exports.deleteData = deleteData;