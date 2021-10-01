echo off
echo 请确保您已安装Node.js，您正处于Windows客户端
echo 我们将为您安装一些必要指令
pause
cls
npm install -g cnpm --registry=https://registry.npm.taobao.org
echo CNPM安装完成
pause
cls
npm install -global nodemon
echo NODEMON安装完成
pause
