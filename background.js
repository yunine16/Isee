/*
chrome.contextMenus.create({title:"コンテキストメニューを追加",contexts:["selection"],onclick:chang}function{

};*/
var original_html

chrome.contextMenus.create({title: "コンテキストメニュー登録", contexts:["selection"],onclick: change}, function(){
     alert("コンテキストメニュー登録完了");
});

function change(info){
  prompt(String(info.selectionText));
  alert(String(info.pageUrl));
}
