//チェックボックスのチェックを外す
$(function() {
  $('.nav_item>a').click(function() {
    $('#drawer-toggle').removeAttr('checked').prop('checked', false).change();
  });
});

// TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
function TextTypingAnime() {
  $('.typeanimation').each(function() {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var thisChild = "";
    if (scroll >= elemPos - windowHeight) {
      thisChild = $(this).children(); //spanタグを取得
      //spanタグの要素の１つ１つ処理を追加
      thisChild.each(function(i) {
        var time = 100;
        //時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
        $(this).delay(time * i).fadeIn(time);
      });
    }
    else {
      thisChild = $(this).children();
      thisChild.each(function() {
        $(this).stop(); //delay処理を止める
        $(this).css("display", "none"); //spanタグ非表示
      });
    }
  });
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function() {
  TextTypingAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

function over(text){
  $(".skill-desc").text(text)
}
