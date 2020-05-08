// var xhr = new XMLHttpRequest();
// //每当readyState改变时就会触发onreadystatechange函数
// //0: 请求未初始化
// //1: 服务器连接已建立
// //2: 请求已接收
// //3: 请求处理中
// //4: 请求已完成，且响应已就绪
// xhr.open('GET', "/getData", true)
// xhr.onreadystatechange = function () {
//     //readyStatus == 4说明请求已经完成
//     if(xhr.readyState == 4 && xhr.status ==200) {
//         //从服务器获得数据
//         console.log(xhr.responseText);
//         console.log(typeof xhr.responseText);
//         // fn.call(this, xhr.responseText);
//     }
// };
// //发送数据
// xhr.send();