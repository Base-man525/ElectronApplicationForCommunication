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

wss.on('connection', socket => {
   console.log(socket.id);
})