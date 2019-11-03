$(function() {
  console.log("コンテントスクリプトだよ");
  var obtain_array=["一般項を予想して数学的帰納法で証明する","一般項を求めることができるか"];
  // example をハイライトする (文字の背景色を変える)
  const reg = new RegExp(obtain_array[0], "gi");
  console.log(reg);
  const $bodyText = $("body").html();
  const $m = $bodyText.match(reg);
  $("body").html(
    $bodyText.replace($m, "<span style='background-color: yellow'><a href= 'https://www.google.com'>" +  $m + "</a>" + "</span>")
  );
});
