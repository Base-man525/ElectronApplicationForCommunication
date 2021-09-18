import { io } from "socket.io-client"
//目前为主要方案
const socket = io("http://localhost:3000"); //WebSocket后的URL为http请求,3000端口为服务端应用占用端口
// var wss = new WebSocket('wss://localhost:3000')
// // if(wss.readyState == WebSocket.OPEN) { /*readyState是WebSocket的一个API，readyState属性返回实例对象的当前状态，共有四种。
// //     CONNECTING：值为0，表示正在连接。
// //     OPEN：值为1，表示连接成功，可以通信了。
// //     CLOSING：值为2，表示连接正在关闭。
// //     CLOSED：值为3，表示连接已经关闭，或者打开连接失败*/
// //     alert("Connected successfully!");
// // }
// // else if(wss.readyState == WebSocket.CLOSED) {
// //     alert("Connecting failed");
// // } //这里初始链接状态只有两种
// wss.onopen = function() {
//     console.log("Connected successfully!");
//     wss.emit("测试消息");
// }
// wss.onclose = function(event) {
//     var code = event.code;
//     var reason = event.reason;
//     var wasClean = event.wasClean;
// };

// wss.onmessage = function(event){
//     if(typeof event.data === String) {
//       console.log("Received data string");
//       console.log(event.data);
//     }
   
//     if(event.data instanceof ArrayBuffer){
//       var buffer = event.data;
//       console.log("Received arraybuffer");
//       console.log(string(buffer));
//     }
// }
// wss.onerror = function(event) {
//     console.log("Received error");
// };
// //以上为socket预先编译
