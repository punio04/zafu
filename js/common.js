$(document).ready(function () {
  init_link();
  $('.notice p').click(function (e) {
    $(this).parent().find('ul').slideToggle();
  });
  $('.to_up').click(function (e) {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
});

function init_link() {
  $('.btn_link').click(function (e) {
    var id = $(this).attr('href')
    if (id) {
      e.preventDefault();
      e.stopPropagation();
      var delta = $(window).width() >= 768 ? 0 : 50;
      $([document.documentElement, document.body]).animate({
        scrollTop: $(id).offset().top - delta
      }, 500);
    }
  });
}

$(function () {
  var retb = $('.btn-list--wrapper');
  $(retb).hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(retb).fadeIn();
    } else {
      $(retb).fadeOut();
    }
  });

  var winScrollTop;
  $('.js-modal-open').each(function () {
    $(this).on('click', function () {
      winScrollTop = $(window).scrollTop();
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      $(modal).fadeIn();
      return false;
    });
  });
  $('.js-modal-close').on('click', function () {
    $('.js-modal').fadeOut();
    $('body,html').stop().animate({ scrollTop: winScrollTop }, 100);
    return false;
  });

});



// 感染症対策文アコーディオン
var itemHeights = [];
var returnHeight;
$(function () {
  $(".infection_item").each(function () {
    var thisHeight = $(this).height();
    itemHeights.push(thisHeight);
    $(this).addClass("is_hide");
    returnHeight = $(this).height();
  });
});

$(".infection_trigger").click(function () {
  if (!$(this).hasClass("is_show")) {
    var index = $(this).index(".infection_trigger");
    var addHeight = itemHeights[index];
    $(this).addClass("is_show").next().animate({ height: addHeight }, 150).removeClass("is_hide");
  } else {
    $(this).removeClass("is_show").next().animate({ height: returnHeight }, 150).addClass("is_hide");
  }
});


$(function () {
  var headerHight = 100; //ヘッダーの高さ
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - headerHight;
    $("html, body").animate({
      scrollTop: position
    }, 500, "swing");
    return false;
  });
});

