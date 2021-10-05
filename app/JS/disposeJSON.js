function disposeJSON(fileURL, requestNode, requestNodePath) {
    var JSONFile = readJSON(fileURL);
    var JSONNode = requestNodePath+requestNode;
    var data = JSONFile+'.'+JSONNode;
    return data;
}