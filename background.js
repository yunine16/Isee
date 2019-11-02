/*
chrome.contextMenus.create({title:"コンテキストメニューを追加",contexts:["selection"],onclick:chang}function{

};*/

chrome.contextMenus.create({title: "コンテキストメニュー登録", contexts:["selection"],onclick: change}, function(){
     alert("コンテキストメニュー登録完了");
});

function change(info){

/*
  prompt(String(info.selectionText));
  alert(String(info.pageUrl));
  */
sendData({question:info.selectionText,url:info.pageUrl});
};

function sendData(data) {
  var XHR = new XMLHttpRequest();
  var FD  = new FormData();
  var name;

  // データを FormData オブジェクトに投入します
  for(name in data) {
    FD.append(name, data[name]);
  }

  // データが正常に送信された場合に行うことを定義します
  XHR.addEventListener('load', function(event) {
    alert('Yeah! Data sent and response loaded.');
  });

  // エラーが発生した場合に行うことを定義します
  XHR.addEventListener('error', function(event) {
    alert('Oups! Something goes wrong.');
  });

  // リクエストをセットアップします
  XHR.open('POST', 'http://ucommbieber.unl.edu/CORS/cors.ph');

  // FormData オブジェクトを送信するだけです。HTTP ヘッダは自動的に設定されます
  XHR.send(FD);
}
