
  $(function () {
    // スクロールを開始したら
    $(window).on("scroll", function () {
      // ファーストビューの高さを取得
      mvHeight = $(".container").height();
      if ($(window).scrollTop() > mvHeight) {
        // スクロールの位置がファーストビューより下の場合にclassを付与
        $(".js-header").addClass("transform");
      } else {
        // スクロールの位置がファーストビューより上の場合にclassを外す
        $(".js-header").removeClass("transform");
      }
    });
  });

  $('#hamb').click(function() {
    $(this).toggleClass('active');
    $('#black-bg').toggleClass('open');
 });
