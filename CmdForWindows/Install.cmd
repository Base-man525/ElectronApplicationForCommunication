echo off
echo 请确保您已安装Node.js，您正处于Windows客户端
echo 我们将为您安装一些必要模块
:cd ..\
pause
cls
cnpm install --save-dev electron
cls
echo electron安装完成
pause
cls
cnpm i socket.io-client -global
cls
echo socket.io-client安装完成
pause
cls
cd .\app\Server
Install.cmd
cls
echo socket.io安装完成
:cnpm install socket.io
:cls
:echo socket.io安装完成
:pause
:cls
:cnpm install socket.io-client
:cls
:echo socket.io-client安装完成
:pause
echo 已经安装完毕，感谢您的使用与支持
pause