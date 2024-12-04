
//scroll_effect
$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('.scroll_up');
    var scrollAnimationFunc = function () {
      for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 100;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationElm[i].classList.add('on');
        }
      }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
  });

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
