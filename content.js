$(function() {
  console.log("コンテントスクリプトだよ");

  // example をハイライトする (文字の背景色を変える)
  const reg = new RegExp(/(一般項を予想して数学的帰納法で証明する)/, "gi");
  const $bodyText = $("body").html();
  $("body").html(
    $bodyText.replace(reg, "<span style='background-color: yellow'>$1</span>")
  );
});
