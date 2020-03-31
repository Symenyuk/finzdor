

(function($, window){

  $.fn.testSlider = function(prev, next){
    return this.each(function(){
      var $container = $(this).children().eq(0);
      if (!$container) return;

      var $slides = $container.children(),
          len = $slides.length,
          i = $slides.outerWidth(true),
          inSlider = Math.floor($(this).width() / i),
          firstItem = 1,
          isMoving = false,
          indicator = $('.indicator'),
          indicatorText = 25;
      $container.css('width', (len + inSlider) * i);

      for (var j = 0; j < inSlider; j++){
        $container.append($slides.eq(j).clone());
      }
      indicator.text(indicatorText + '%');
      $(next).on('click', function(e){
        e.preventDefault();
        $('.back_btn').removeClass('disabled');
        if (firstItem < len) {
          firstItem++;
          if (firstItem == 1) {
            indicatorText = 25;
          } else if (firstItem == 2) {
            indicatorText = 50;
          } else if (firstItem == 3) {
            indicatorText = 75;
          } else if (firstItem == 4) {
            indicatorText = 100;
          }
          indicator.css({"width":"+=25%"}).text(indicatorText + '%');
          $('.next_btn').removeClass('disabled');
          if (firstItem == len) {
            $('.next_btn').addClass('disabled');
          }
        }
         // $container.css("left","0px")
         // indicator.css({"width":"+=25%"});

        if (!isMoving){
          isMoving = true;
          $container.animate({
            left: '-=' + i
          },
          'swing',
          function(){
              isMoving = false;
          });
        }
      });
      if (firstItem == 1) {
        $('.back_btn').addClass('disabled');
      }
      $(prev).on('click', function(e){
        e.preventDefault();
        $('.next_btn').removeClass('disabled');

        if (firstItem > 1) {
          firstItem --;
          if (firstItem == 1) {
            indicatorText = 25;
          } else if (firstItem == 2) {
            indicatorText = 50;
          } else if (firstItem == 3) {
            indicatorText = 75;
          } else if (firstItem == 4) {
            indicatorText = 100;
          }
          indicator.css({"width":"-=25%"}).text(indicatorText +'%');
          $('.back_btn').removeClass('disabled');
          if (firstItem == 1) {
            $('.back_btn').addClass('disabled');
          }
        }
        //   $container.css("left", len * i * -1);
        //   firstItem = len;

        if (!isMoving){
          isMoving = true;
          $container.animate({
            left: '+=' + i
          },
          'swing',
          function(){
            isMoving = false;
          });
        }
      });
    });
  }

})(jQuery, window);


//function toggleClick
 (function($) {
     $.fn.clickToggle = function(func1, func2) {
         var funcs = [func1, func2];
         this.data('toggleclicked', 0);
         this.click(function() {
             var data = $(this).data();
             var tc = data.toggleclicked;
             $.proxy(funcs[tc], this)();
             data.toggleclicked = (tc + 1) % 2;
         });
         return this;
     };
 }(jQuery));


$(document).ready(function() {

  (function() {
    $("#one-slider").slider({
      range: "max",
      min: 0,
      max: 10000,
      value: 40,
      slide: function( event, ui ) {
        $("#input-one-slider").val( ui.value );
        $(ui.value).val($('#input-one-slider').val());
      }
    });
    $("#input-one-slider").keyup(function() {
      $("#one-slider").slider("value" , $(this).val())
    });

    $("#two-slider").slider({
      range: "max",
      min: 0,
      max: 10000,
      value: 5192,
      slide: function( event, ui ) {
        $("#input-two-slider").val( ui.value );
        $(ui.value).val($('#input-two-slider').val());
      }
    });
    $("#input-two-slider").keyup(function() {
      $("#two-slider").slider("value" , $(this).val())
    });
  })();


  // pop-up test
  $('#popup-slider').testSlider('.back_btn', '.next_btn');

  // mobile menu
  var btnMenu = $('#show-landing-menu'),
      nav = $('nav.menu');
  btnMenu.clickToggle(function() {
      $(this).addClass('open');
      nav.addClass('show');
  }, function() {
      $(this).removeClass('open');
      nav.removeClass('show');
  });




  // section#main-finzdor
  (function() {
    var itemButton = $('#main-finzdor .numbers').find('a');
    var showTabs = $('#main-finzdor .description .change_text');
    var showElementFirst = $('#main-finzdor .description #tab_one');
    var firstButton = $('#main-finzdor .numbers .one_number');

    showTabs.hide();
    showElementFirst.show();
    firstButton.addClass('active');

    itemButton.on('click', function(event) {
      event.preventDefault();
      itemButton.removeClass('active');
      $(this).addClass('active');
      showTabs.hide();
      var selectTab = $(this).attr("href");
      $(selectTab).fadeIn();
    });
  })();

  (function() {
    // button to-top
    if ($('#btn-to-top').length) {
        var scrollTrigger = 300, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#btn-to-top').addClass('show');
                } else {
                    $('#btn-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#btn-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
  })();

  (function() {
    $("#one-slider").slider({
      range: "max",
      min: 0,
      max: 10000,
      value: 40,
      slide: function( event, ui ) {
        $("#input-one-slider").val( ui.value );
        $(ui.value).val($('#input-one-slider').val());
      }
    });
    $("#input-one-slider").keyup(function() {
      $("#one-slider").slider("value" , $(this).val())
    });

    $("#two-slider").slider({
      range: "max",
      min: 0,
      max: 10000,
      value: 5192,
      slide: function( event, ui ) {
        $("#input-two-slider").val( ui.value );
        $(ui.value).val($('#input-two-slider').val());
      }
    });
    $("#input-two-slider").keyup(function() {
      $("#two-slider").slider("value" , $(this).val())
    });
  })();

  (function() {
    $(".content_reviews").owlCarousel({
      items: 1,
      nav: true,
      dots: false,
      loop: true,
      autoplay: true,
      autoplayHoverPause: true,
    });
    $('.offers_lawyers').owlCarousel({
      items: 1,
      nav: true,
      dots: false,
      onInitialized: counter,
      onTranslated: counter,
      autoplay: true,
      autoplayHoverPause: true,
    });

    function counter(event) {
      var element   = event.target;
      var items     = event.item.count;
      var item      = event.item.index + 1;
      $('#counter').html("<span>"+item+"</span>"+" / "+items)
    }

  })();


  // fotorama section#arbitr-manag
  var $fotoramaDiv = $('.fotorama').fotorama();
  var fotorama = $fotoramaDiv.data('fotorama');
  $('#prev').on('click', function () {
      fotorama.show('<');
  });
  $('#next').on('click', function () {
      fotorama.show('>');
  });


  // pop-up
  $(function() {
    $(".pop_up_call_you_back").dialog({
      autoOpen : false,
      modal : true,
      show : "blind",
      hide : "blind",
      width: $(window).width() > 760 ? 760 : 320,
      open: function () {
         $(document.body).css({ overflow: "hidden" })
      },
      close: function () {
         $(document.body).css({ overflow: "scroll" })
      },
    });
    $("#call-you-back").click(function() {
      $(".pop_up_call_you_back").dialog("open");
      return false;
    });

    $('.pop_up_test').dialog({
      autoOpen : false,
      modal : true,
      show : "blind",
      hide : "blind",
      width: $(window).width() > 760 ? 760 : 320,
      open: function () {
         $(document.body).css({ overflow: "hidden" })
      },
      close: function () {
         $(document.body).css({ overflow: "scroll" })
      },
    });
    $(".btn_pass_test").click(function() {
      $(".pop_up_test").dialog("open");
      return false;
    });
  });

  //
  // var testParent = $('.pop_up_test');
  // var substr = $('.question-slide > div');
  //
  // var nextBtn = $('.next_btn');
  // var backBtn = $('.back_btn');
  // nextBtn.on('click', function() {
  //
  // });
  //
  // for(var i = 0; i < substr.length; i++) {
  //   console.log("loop", substr[i])
  // }


});
