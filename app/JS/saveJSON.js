function saveJSON(data, filename, account){
	if(!data) {
		alert('保存的数据为空');
		return;
	}
	if(!filename) {
		if(!account) {
			filename = 'defaultFriendList.json';
		}
		filename = account+"FriendList.json";
	}
	if(typeof data === 'object'){
		data = JSON.stringify(data, undefined, 4)
	}
	var blob = new Blob([data], {type: 'text/json'}),
	e = document.createEvent('MouseEvents'),
	a = document.createElement('a')
	a.download = filename
	a.href = window.URL.createObjectURL(blob)
	a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
	e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
	a.dispatchEvent(e)
}
function readJSON(fileURL){ //有问题，不能传输对象给宿主
	var url = fileURL;/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
	var request = new XMLHttpRequest();
	request.open("get", url);/*设置请求方法与路径*/
	request.send(null);/*不发送数据到服务器*/
	request.onload = function () {/*XHR对象获取到返回信息后执行*/
		if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
			var json = JSON.parse(request.responseText);
			for(var i=0;i<json.length;i++){
				console.log(json[i].name);
			}
			console.log(json);
		}
	}
};