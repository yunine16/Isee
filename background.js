/*
chrome.contextMenus.create({title:"コンテキストメニューを追加",contexts:["selection"],onclick:chang}function{

};*/
var original_html

chrome.contextMenus.create({title: "質問として登録する", contexts:["selection"],onclick: change}, function(){
     //
});

function change(info){
      sendData(info.pageUrl,info.selectionText);
};
//jquery読み込み
var script = document.createElement("script");
// 要素ノードの属性値設定、HTML5はtypeプロパティは不要
script.src = "jquery-3.4.1.min.js";
var head = document.getElementsByTagName("head");
head[0].appendChild(script);
//URLと選択内容をjson形式で送信
function sendData(URL,TEXT) {
        var JSONdata = {
            url: URL,
            text: TEXT
        };
        console.log(JSONdata);
        $.ajax({
              type : 'post',
              url : "modal.html",
              data : JSON.stringify(JSONdata),
              contentType: 'application/JSON',
              //dataType : 'JSON',  不要かも
              scriptCharset: 'utf-8',
              //ajax通信エラー
              error : function(XMLHttpRequest, textStatus, errorThrown) {
                console.log("ajax通信に失敗しました");
                console.log("XMLHttpRequest : " + XMLHttpRequest.status);
                console.log("textStatus     : " + textStatus);
                console.log("errorThrown    : " + errorThrown.message);
              },
              //ajax通信成功
              success : function(response) {
                console.log("ajax通信に成功しました");
                console.log(response);
              }
          });
}
