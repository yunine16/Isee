chrome.contextMenus.create({title:"コンテキストメニューを追加",contexts:["selection"],onclick:change()});

function change(info, tab){
  console.log(info, tab)
  //<iframe src="https://yellow.gray-code.com/" width="600" height="400"　background="#000000"></iframe>
  /*chrome.tabs.getSelected(null, function(tab) {
            chrome.tabs.sendRequest(tab.id,{});*/
  var selection = window.getSelection();
  console.log("セレクション=" + selection);

  prompt(String(selection));
  /*if(selection.getCount() > 0){

  }*/


};
