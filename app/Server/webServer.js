/**
 * @author Base-man525
 * @email 337752715@qq.com
 * @copyright copyright 2021 © by Base-man525
 */
//  var socket = __import__('Socket', null, {}) //导入Socket library..

//  var server = new socket.SocketServer('127.0.0.1', 8000) //创建一个Socket Server.

//  server.on('listen', function(server) {  //加入服务器开始监听的事件
//     print('Event listen on server:' + server.localAddress + ', port:' + server.localPort)
//  })
//  server.on('clientClosed', function(client) {
//     print('Event clientClosed on server:' + client.address + ', port:' + client.port)
//  })
//  server.on('closed', function(socket) {
//     print('Event closed on server')
//  })


//  server.on('accept', function(client){   // 一个新的client连接
//     print('new client:' + client.address + ', port:' + client.port)
//     client.on('read', function(s) {   //clinet的有数据可读。
//         var input = s.read();
//         print('read data:' + input)
//         s.write(input)       //写数据到，
//     });
//     client.on('closed', function(s) {
//         print('bye bye client.')
//         //s.write('input')
//     });
//  })
//  server.listen("127.0.0.1", 8000)   //监听一个端口, 并blocking, 直到服务器端被关闭。
//以上皆为备用方案
const wss = require('socket.io')(3000, {
   cors: {
      origin: ['http://localhost:8080'] //8080端口为客户端占用端口
   }
})

function socketCmp(reason) {
   if(reason == "transport error") {
      return "Server -- 传输错误";
   }
   else if(reason == "server namespace disconnect") {
      return "Server -- 服务端执行socket.disconnect();";
   }
   else if(reason == "client namespace disconnect") {
      return "Client -- 从客户端获取断开数据包";
   }
   else if(reason == "ping timeout") {
      return "Client -- 客户端在允许的时间内停止响应Ping（根据pingTimeout配置设置）";
   }
   else if(reason == "transport close") {
      return "Client -- 客户端停止发送数据";
   }
}
//socketCmp is for developers

wss.on('connection', socket => {
    console.log(socket.id);
    socket.on('disconnect', reason => {
       console.log("客户端断开连接!\n");
       console.log(socket.id+"的断开连接原因:", socketCmp(reason));
    })
    socket.on("clientToServer", inner => {
       console.log(inner);
       wss.emit("serverToClient", inner);
    })
})
// console.log() just for developers
