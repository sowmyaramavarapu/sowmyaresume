function newpage(){
  window.open("resume.html","_self",true);
}
function loadJSON(file,callback){
  var rawFile=  new XMLHttpRequest();
  rawFile.overrideMinetype("application/json");
  rawFile.open("GET",file,true);
  rawFile.onreadystatechange=function(){
    if(readyState===4 && rawFile.status=="200"){
      callback(rawFile.responseText);

    }
  }
  rawFile.send();
}
loadJSON("resource/resume.json",function (text) {
var data JSON.parse(text);
console.log(data);
});
document.getElementById('mainDiv')
document.getElementById('leftDiv')
document.getElementById('rightDiv')
