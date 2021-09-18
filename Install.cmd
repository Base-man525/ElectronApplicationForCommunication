echo 请确保您已安装Node.js，您正处于Windows客户端
pause
npm install -g cnpm --registry=https://registry.npm.taobao.org %安装个cnpm%
cnpm sync connect %同步%
cnpm install --save-dev electron
cnpm install webSocket
cnpm install express %socket通信必要模块%
cnpm install socket.io %socket通信必要模块%
npm install -global nodemon %服务端启动必要命令%
cnpm install socket.io-client %socket通信必要模块%
echo 已经安装完毕，感谢您的使用与支持