const redis = require("redis");

let port = 6379;
let host = "127.0.0.1";
let password = "123456";

function setKey(key, value, callback) {
    let client = redis.createClient(port, host);
    client.auth(password, function() {
        console.log("ok");
    });
    client.on("connect", function(){
        client.set(key, value, callback)
    });
    // client.end();
}

function getKey(key, callback) {
    let client = redis.createClient(port, host);
    client.auth(password, function() {
        console.log("ok");
    });
    client.on("connect", function(){
        client.get(key, callback);
    });
    // client.end();
}

function hset(hash, key, value, callback) {
    let client = redis.createClient(port, host);
    client.auth(password, function() {
        console.log("ok");
    });
    client.on("connect", function () {
        client.hset(hash, key, value, callback);
    });
}

function hget(hash, key, callback) {
    let client = redis.createClient(port, host);
    client.auth(password, function() {
        console.log("ok");
    });
    client.on("connect", function() {
        client.hget(hash, key, callback);
    });
}


function hgetall(hash, callback) {
    let client = redis.createClient(port, host);
    client.auth(password, function() {
        console.log("ok");
    });
    client.on("connect", function() {
        client.hgetall(hash, callback);
    });
}

function hmset(hash, paramArr, callback) {
    let client = redis.createClient(port, host);
    client.auth(password, function() {
        console.log("ok");
    });
    client.on('connect', function () {
        client.hmset(hash, ...paramArr, callback);
    });
}


// setKey("key5" , "pig",  function (error, reply) {
//     if (error == null) {
//         console.log(reply);
//     } else {
//         console.log(error);
//     }
// });
//
// getKey("key1",  function (error, reply) {
//     if (error == null) {
//         console.log(reply);
//     } else {
//         console.log(error);
//     }
// });
// let client = redis.createClient(port, host);
//
// client.auth(password, function() {
//     console.log("ok");
// })

// client.on("connect", function(){
//     client.set("key2", "mokey", function (error, reply) {
//         if (error == null) {
//             console.log(reply);
//         } else {
//             console.log(error);
//         }
//     })
//     client.get("key1", function (error, reply) {
//         if (error == null) {
//             console.log(reply);
//         } else {
//             console.log(error);
//         }
//     });
// })d

module.exports.setKey = setKey;
module.exports.getKey = getKey;
module.exports.hset = hset;
module.exports.hget = hget;
module.exports.hgetall = hgetall;
module.exports.hmset = hmset;