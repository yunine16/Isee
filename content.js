
$(function() {
  console.log("コンテントスクリプトだよ");
  //const DATA_URL = 'https://i-see.herokuapp.com/questions.json';
  $.get({
  url: 'https://i-see.herokuapp.com/questions/1/answers.json',
  dataType: 'json',
  contentType:'application/json',
   success: function(json){
     var len = json.length;
     /*for(var i=0; i < len; i++){
       $("#a").append(json[i].version + ' ' + json[i].codename + '<br>');
   }*/
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    console.log(len)
   },
   error : function(XMLHttpRequest, textStatus, errorThrown) {
     console.log("errrorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
   console.log(XMLHttpRequest.responseText);

   //console.log($.parseJson(XMLHttpRequest.responseText));
   console.log("XMLHttpRequest : " + XMLHttpRequest.status);
   console.log("textStatus     : " + textStatus);
   console.log("errorThrown    : " + errorThrown.message);
  },

  });


var obtain_array=["一般項を予想して数学的帰納法で証明する","一般項を求めることができるか"];
// example をハイライトする (文字の背景色を変える)
const reg = new RegExp(obtain_array[0], "gi");
console.log(reg);
const $bodyText = $("body").html();
const $m = $bodyText.match(reg);
$("body").html(
  $bodyText.replace($m, "<span style='background-color: yellow'><button type='button' style='width:30px; font-size:20px;color:#FF0000;bgccolor:#FFFFFF;text-align:center' id='modal_show'>"+"！"+ "</button>" +  $m  + "</span>")
);
$("body").append("<div class='modal-wrapper' id='modal' style='position: fixed; top: 0; height: 100vh; width: 100vw; display: none; background-color: rgba(28,28,28,0.3);'>" +
                      "<div class='modal_bg modal_close' style='height: 100vh; width: 100%; position: absolute;'></div>" +
                      "<div class='modal_content_cover' style='background-color: #e5e5e5; width: 60%; height: 80%; border-radius: 10px; position: absolute; left: 50%; top: 50%; text-align: center;'>" +
                      "<div class='modal_content' style='height: 80%; margin: 10% 10%; overflow: hidden;'>" +
                      "<div class='modal_question' style='border-bottom: 1px solid #000; margin-bottom: 5%; display: flex; align-items: center;'>"+
                              "<h1>質問箇所</h1>" +
                              "<p style='margin-left: 10%;'>"+$m+"</p>"+
                              "</div>"+
                              "<div class='modal_answer' style='display: flex; align-items: flex-start;'>"+
                              "<h1 style='margin-top: 0;'>解釈一覧</h1>"+
                              "<li style='list-style: none; margin-left: 10%;'>"+
                              "  <ul class='answer' style='margin-top: 10px; margin-bottom: 50px; padding: 0;'>DOMはDOMだよ</ul>"+
                              "  <ul class='answer'>DOMはDOMだよ</ul>"+
                              "  <ul class='answer'>DOMはDOMだよ</ul>"+
                              "  <ul class='answer'>DOMはDOMだよ</ul>"+
                              " </li>"+
                              " </div>"+
                              " </div>"+
                              " </div>"+
                              " </div>")

});

$(function() {
$('#modal_show').click(function(){
  $('#modal').fadeIn();
});
$('#modal').click(function(){
  $(this).fadeOut();
})
//modal_contentクリックでfadeOut解除
$('.modal_content').on('click',function(cancel){
  cancel.stopPropagation();
});
});




/*
function getJson(){
  var req = new XMLHttpRequest();		  // XMLHttpRequest オブジェクトを生成する
req.onreadystatechange = function() {		  // XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
  if(req.readyState == 4 && req.status == 200){ // サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合
    alert(req.responseText);		          // 取得した JSON ファイルの中身を表示
  }
};
req.open("GET", "https://i-see.herokuapp.com/questions.json", false); // HTTPメソッドとアクセスするサーバーの　URL　を指定
req.send(null);
}
*/
/*
$(function() {
  $('#modal_show').click(function(){

    $('#modal').fadeIn();
  });
});*/
