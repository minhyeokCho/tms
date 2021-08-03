$(document).ready(function(){
	//사이즈 변수 선언(공통 사용)
	var winWidth = window.innerWidth || document.documentElement.clientWidth;//미디어쿼리 사이즈와 $(window).width()가 인식하는 px단위 사이즈가 달라서 선언한 변수 : clinentWidth 와 innerWidth의 사이즈는 동일하나 innerWidth는 익스플로러 9 미만 버전은 인식하지 못하므로 동시선언
	
	// DotDotDot
	$('.contents2 .news > ul > li > .newsContent .title').dotdotdot({ 
		ellipsis: "...",
		watch :"true",
		warp : "word",
	});
	$('.contents2 .news > ul > li > .newsContent .content').dotdotdot({ 
		ellipsis: "...",
		watch :"true",
		warp : "word",
	});
	$('.tabList > ul > li .bookListW .bookList a .bookTitle').dotdotdot({ 
		ellipsis: "...",
		watch :"true",
		warp : "word",
	});
	// DotDotDot

	// Top Menu Slide
	$("#divTopMenu .sliderW>ul>li>a").on('click focus',function(){
        if($("#divTopMenu .sliderW>ul>li.on").length < 1){
			$(this).parent().addClass("on").siblings().removeClass("on");
			$(this).siblings().stop().slideDown();
		}else{
			$(this).parent().addClass("on").siblings().removeClass("on");
			$("#divTopMenu .sliderW>ul>li>div").hide();
			$(this).stop().next().show();
		}
        return false;
	});
	// 영역외 클릭시 슬라이드 메뉴 닫기
	$('body').click(function(e){
		if(!$('#divHeader').has(e.target).length){
			$("#divTopMenu .sliderW >ul>li>div").slideUp(300);
			$("#divTopMenu .sliderW >ul>li").removeClass('on');
		}
	});

	$('.topMenu .prev').click(function(){
		var listWidth = $('.sliderW > ul > li').width();
		if(!$('.sliderW > ul ').is(":animated")){
			$('.sliderW > ul ').css('left',-listWidth);
			$('.sliderW > ul > li').last().prependTo($('.sliderW > ul'));
			$('.sliderW > ul ').animate({"left":"70px"},0);
		}
		return false;			
	});
	
	$('.topMenu .next').click(function(){
		var listWidth = $('.sliderW > ul > li').width();
		if(!$('.sliderW > ul').is(":animated")){
			$('.sliderW > ul').animate({"left":-listWidth},0,function(){
				$('.sliderW > ul > li').first().appendTo($('.sliderW > ul'));
				$('.sliderW > ul').css('left','70px')
			});
		}
		return false;
	});

	$(window).resize(function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		if(winWidth>1600){
			$('#divTopMenu .sliderW >ul>li').sort(sort_li).appendTo('#divTopMenu .sliderW >ul');
			  function sort_li(a, b) {
				return ($(b).data('position')) < ($(a).data('position')) ? 1 : -1;
			  }
        }
    });
	// Top Menu Slide

	// WholeMenu
	$('.wholeMenuBtn a').on('click', function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		if(winWidth > 1025){
			if($('.header').hasClass('wholeMenuOn')){
				$('.wholeMenu').fadeOut(300);
				$('html, body').css('overflow','visible');
				$('.header').removeClass('wholeMenuOn');
			}else{
				$('.wholeMenu').fadeIn(300);
				$('.header').addClass('wholeMenuOn');
				$('html, body').css('overflow','hidden');
			}
		}else{
			if($('.header').hasClass('wholeMenuOn')){
				$('.wholeMenu').fadeOut(0);
				$('html, body').css('overflow','visible');
				$('.header').removeClass('wholeMenuOn');
			}else{
				$('.wholeMenu').fadeIn(0);
				$('.header').addClass('wholeMenuOn');
				$('html, body').css('overflow','hidden');
			}
		}
		return false;
	});

	$('.wholeMenuList > ul > li .depth1').on('click', function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		if(winWidth < 1025){
			if(!$(this).parent().hasClass('on')){
				if($('.wholeMenuList > ul > li div').hasClass('on')){
					$('.wholeMenuList > ul > li div').removeClass('on');
					$('.wholeMenuList > ul > li ul').slideUp(300);
					$(this).parent().addClass('on')
					$(this).siblings().slideDown(300)
				}else{
					$(this).parent().addClass('on')
					$(this).siblings().slideDown(300)
				}
			}else{
				$('.wholeMenuList > ul > li div').removeClass('on');
				$('.wholeMenuList > ul > li ul').slideUp(300);
			}
		}
		return false;
	});
	// WholeMenu

	// mainBg
	$('.mainSlideW').slick({
		dots : true,
		slide: 'div',
		arrows:false,
		speed : 1000,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
		cssEase: 'linear',
	});	

	$(window).on('load', function(){
		if($('.slick-dots li').hasClass('slick-active')){
			$('.slick-dots li.slick-active').addClass('on');
		}else{
			$(this).removeClass('on')
		}
	});

	$(".mainSlideW").on("afterChange", function(){
		if($('.slick-dots li').hasClass('slick-active')){
			$('.slick-dots li').removeClass('on');
			$('.slick-dots li.slick-active').addClass('on');
		}else{
			$(this).removeClass('on')
		}
	});
	// mainBg

	// notice Slick
	$('.noticeList').slick({
		slide: 'div',	
		infinite : true,
		slidesToShow : 1,	
		slidesToScroll : 1,	
		speed : 1500,	
		arrows : true, 		
		vertical : true,
		draggable : false,
		prevArrow : $('.noticePrev'),
		nextArrow : $('.noticeNext'),
	});
	// notice Slick

	// news tab
	$('.contents2 .news > ul > li > a').on('click focus', function(){
		$('.contents2 .news > ul > li').removeClass('on');
		$(this).parent().addClass('on')
		return false
	});
	// news tab

	// popup Slick
	$('.popupImg').slick({
		slide: 'div',	
		infinite : true,
		slidesToShow : 1,	
		slidesToScroll : 1,	
		speed : 500,	
		arrows : true, 		
		vertical : false,
		draggable : true,
		autoplay : true,
		autoplaySpeed : 3500, 
		fade: true,
		cssEase: 'linear',
		prevArrow : $('.popupPrev'),
		nextArrow : $('.popupNext'),
	});
	$('.control .play').click(function(){
		$('.popupImg').slick('slickPlay');
		$(this).hide();
		$('.control .pause').show();
		$('.control .pause').focus();
		return false;
	});
	
	$('.control .pause').click(function(){
		$('.popupImg').slick('slickPause');
		$(this).hide();
		$('.control .play').css('display','block');
		$('.control .play').focus();
		return false;
	});
	
	$(document).ready(function(){
		var TabTotal = $('.popupImg').slick("getSlick").slideCount;
		$('.popupZone .slickCounter .total').text(TabTotal);
	});

	$('.popupImg').on('init', function(event, slick) {
		$('.popupZone .slickCounter .current').text(slick.currentSlide + 1);
	})
	.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		$('.popupZone .slickCounter .current').text(nextSlide + 1);
	});
	// popup Slick

	// book Slick
	$('.tabList > ul > li .bookList').slick({
		slide: 'div',	
		infinite : true,
		slidesToShow : 3,	
		slidesToScroll : 1,	
		speed : 500,	
		arrows : false, 		
		vertical : false,
		draggable : true,	
		variableWidth: true,
		centerPadding: '50px',
	});

	$('.tabList a.tab').on('click focus', function(){
		$('.tabList a.tab').parent().removeClass('on')
		$(this).parent().addClass('on');
		$('.tabList > ul > li .bookList').slick('setPosition');
		return false;
	});
	// book Slick

	// Quick Menu
	$('.quickMenuAll').click(function(){
		if($(this).hasClass('on')){
			$('.quickMenuW').removeClass('all');
			$(this).removeClass('on');

		}else{
			$('.quickMenuW').addClass('all');
			$(this).addClass('on');
		}
		return false;
	});
	// Quick Menu
});