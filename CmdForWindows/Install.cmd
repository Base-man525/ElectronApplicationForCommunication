echo off
echo ��ȷ�����Ѱ�װNode.js����������Windows�ͻ���
echo ���ǽ�Ϊ����װһЩ��Ҫģ��
:cd ..\
pause
cls
cnpm install --save-dev electron
cls
echo electron��װ���
pause
cls
cnpm i socket.io-client -global
cls
echo socket.io-client��װ���
pause
cls
cd .\app\Server
Install.cmd
cls
echo socket.io��װ���
:cnpm install socket.io
:cls
:echo socket.io��װ���
:pause
:cls
:cnpm install socket.io-client
:cls
:echo socket.io-client��װ���
:pause
echo �Ѿ���װ��ϣ���л����ʹ����֧��
pause