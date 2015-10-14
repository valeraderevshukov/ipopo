head.ready(function() {
	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });
	$(".js-catalog").on('init', function(event, slick, direction){
	  setTimeout(function(){
	  	$('.js-catalog').addClass("is-ready");
		},200)
	});
	$(".js-catalog").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		draggable: true,
		arrows: false,
		infinite: true,
		responsive:[
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: "60px",
					dots: true,
				}
			},
			{
				breakpoint: 479,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: "20px",
					dots: true,
				}
			}
		]
	});
	$(".js-slider-element").on('init', function(event, slick, direction){
	  setTimeout(function(){
	  	$('.js-slider-element').addClass("is-ready");
		},200)
	});
	$(".js-slider-element").slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 5000,
				settings: "unslick"
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					draggable: true,
					dots: true,
					centerMode: true,
  					centerPadding: '40px',
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					draggable: true,
					dots: true,
					centerMode: true,
  					centerPadding: '70px',
  				}
			},
			{
				breakpoint: 535,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					draggable: true,
					dots: true,
					centerMode: true,
					centerPadding: '80px'
				}
			},
			{
				breakpoint: 479,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					draggable: true,
					dots: true,
					centerMode: true,
					centerPadding: '30px'
				}
			},
			{
				breakpoint: 370,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					draggable: true,
					dots: true,
					centerMode: true,
					centerPadding: '30px'
				}
			}
		]
	});
	var slider = $('.js-slider');
slider.on('init', function(slick) {
	  setTimeout(function(){
	  	slider.addClass("is-ready");
	  },200);
    // clone dots
    slider.find(".slick-dots li").clone().appendTo(".js-slider-dots");
});
slider.slick({
  infinite: true,
  slidesToShow: 1,
  slideToScroll: 1,
  dots: true,
  arrows: true
});
// click on dot
var sliderDot = $(".js-slider-dots li");
sliderDot.on("click", function(){
  var index = $(this).index();
  sliderDot.removeClass("slick-active");
  $(this).addClass("slick-active");
  slider.slick('slickGoTo', index);
  return false;
});
// change active dots
slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  sliderDot.removeClass("slick-active");
  sliderDot.eq(nextSlide).addClass("slick-active")
});
// click immitation on hidden slick buttons
$(".js-slider-prev").on("click", function(){
  slider.find(".slick-prev").trigger("click");
  return false;
});
$(".js-slider-next").on("click", function(){
  slider.find(".slick-next").trigger("click");
  return false;
});


	$(".js-product-slider").on('init', function(event, slick, direction){
	  setTimeout(function(){
	  	$(".js-product-slider").addClass("is-ready");
		},200)
	});
	$(".js-product-slider").slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 5000,
				settings: "unslick"
			},
			{
				breakpoint: 767,
				settings:{
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
					centerMode: true,
					centerPadding: "100px",
					draggable: true,
				}
			},
			{
				breakpoint: 479,
				settings:{
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
					centerMode: true,
					centerPadding: "30px",
					draggable: true,
					adaptiveHeight: true,
				}
			}
		]
	});
	$(".js-catalog-prev").on("click", function(){
		var slider = $(this).attr("data-slider");
		$('.'+slider).slick('slickPrev');
		return false;
	});
	$(".js-catalog-next").on("click", function(){
		var slider = $(this).attr("data-slider");
		$('.'+slider).slick('slickNext');
		return false;
	});
	$(".js-btn-fall").on("click",function(){
		$(this).toggleClass("is-active");
		$(this).parents(".sets__item").find(".fall").toggleClass("is-active")
	});
	$(".js-btn-menu").on("click",function(){
		$(this).addClass("is-active");
		$(".js-menu").addClass("is-active")
	});
	$(".js-menu-close").on("click",function(){
		$(".js-menu").removeClass("is-active"),
		$(".js-btn-menu").removeClass("is-active")
	});

	$('.js-up').on("click", function() { 
		$('body,html').animate({scrollTop:0},800)
 
	});
	$(".js-menu-country").on("click",function(){
		$(".js-menu-choice").toggleClass("is-active");
		return false;
	});
	$(".js-lang").on("click",function(){
		$(".js-lang-choice").toggleClass("is-active");
		return false;
	});
	$(".js-popup-close").on("click",function(){
		$(".js-popup").removeClass("is-active");
		$('body').removeClass('is-hidden');
		return false;
	});
	$(".js-delete-gift").on("click",function(){
		$(".js-popup-delete").addClass("is-active");
		$('body,html').animate({scrollTop:0},500)
	});
	$(".js-edit-gift").on("click",function(){
		$(".js-popup-edit-gift").addClass("is-active");
		$('body,html').animate({scrollTop:0},500)
	});
	$(".js-wishlist-sets").on("click",function(){
		$(".js-popup-wishlist-sets").addClass("is-active");
		$('body,html').animate({scrollTop:0},500)
	});
	$(".js-btn-list-menu").on("click",function(){
		$(".js-list-menu").addClass("is-active");
		$(this).addClass("is-active");
	});
	$(".js-btn-list-menu-close").on("click",function(){
		$(".js-list-menu").removeClass("is-active");
		$(".js-btn-list-menu").removeClass("is-active");
	});
	// $(".js-datepicker").datepicker({$.datepicker.regional[ "ru" ]});
	$("#datepicker").datepicker({
	    dateFormat: "dd.mm.yy",
	});
	$(".js-datepicker").on("click",function(){
		$(".ui-datepicker").toggleClass("is-visible");
		return false;
	});
	$("body").on("click", ".ui-datepicker a", function(){
		alert();
		var day = $(this).text();
		if (day.length == 1) {
			day = "0"+day; // like 08
		}
		var month = $(this).parent().attr("data-month");
		if (month.length == 1) {
			month = "0"+month; // like 03
		}
		var year = $(this).parent().attr("data-year");
		var date = ""+day+month+year;
		$(this).parents(".input_date").find("input").val(date);
		console.log(date);
		return false;
	});
	// $(window).resize(function() { 
	//     if ($(".js-datepicker").hasClass("hasDatepicker")) {
	//         $(".js-datepicker").datepicker( "hide" ).blur();
	//     }
	//  });
	$(".js-select select").on("change", function() {
	  var text = $(this).val();
	  $(this).parents(".js-select").find(".js-input").val(text);
	});
	function number() { 
        var number = $(".js-number");
        number.each(function(){
            var max_number = +($(this).attr("data-max-number"));
            var input = $(this).find("input");
            var plus = $(this).find(".js-plus-number");
            var minus = $(this).find(".js-minus-number");
            plus.on("click", function(){
                var val = +(input.val());
                if (val >= max_number) {
                    return false
                }
                else {
                    val += 1;
                    input.val(val);
                }
            });
            minus.on("click", function(){
                var val = +(input.val());
                if (val > 1) {
                    val -= 1;
                    input.val(val);
                }
                return false;
            });
            input.on("change", function(){
                var val = +$(this).val();
                if (val > max_number) {
                    val = max_number;
                    $(this).val(val);
                }
                if (val == '') {
                    val = 1;
                    $(this).val(val);
                }
            });
        });
    }
    number();

    // input placeholder
    $('.js-input-plac').on('click', function() {
    	$('.js-search-input').focus();
    });

    // tab
	function tab() {
		$(".js-tab").each(function(){
			var tab_link = $(this).find("a"),
				tab_item = $(this).find("li"),
				index = tab_link.attr("href"),
				parents = $(this).parents(".js-tab-group"),
				tab_cont = parents.find(".js-tab-cont");
			tab_link.on("click", function() {
				var index = $(this).attr("href");
				$('.js-tab-item').removeClass("is-active");
				$(this).parent().addClass("is-active");
				tab_cont.fadeOut(0);
				parents.find("."+index).fadeIn(500);
				return false;
			});
			$(this).find('li:first').addClass("is-active");
			parents.find("."+index).fadeIn(500);
		});
	}
	tab();
    
});