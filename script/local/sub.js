$(document).ready(function(){
	//사이즈 변수 선언(공통 사용)
	var winWidth = window.innerWidth || document.documentElement.clientWidth;//미디어쿼리 사이즈와 $(window).width()가 인식하는 px단위 사이즈가 달라서 선언한 변수 : clinentWidth 와 innerWidth의 사이즈는 동일하나 innerWidth는 익스플로러 9 미만 버전은 인식하지 못하므로 동시선언
	
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

	//mobile table
	if ($('.mobileTable').length > 0) {
		$('.mobileTable').footable({
			breakpoints: {
				phone: 719
				, tablet: 1024
			}
		});
	};
	
	/* Tab Menu */
	if($('#divTabMenu').length > 0){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		$("#divTabMenu").mThumbnailScroller({
			type:"click-50",
			theme:"buttons-out"
		});
		$("#divTabMenu").mThumbnailScroller("scrollTo", $('#divTabMenu .selected'));	
		if($('#divTabMenu > div ul').width()>$('#divTabMenu > div').width()){
			$("#divTabMenu > div").addClass('long');
		}else{
			$("#divTabMenu").mThumbnailScroller("destroy");
		}
		//resize
		$(window).resize(function(){
			$("#divTabMenu").mThumbnailScroller({
				type:"click-50",
				theme:"buttons-out"
			});
			$("#divTabMenu").mThumbnailScroller("scrollTo", $('#divTabMenu .selected'));	
			if($('#divTabMenu > div ul').width()>$('#divTabMenu > div').width()){
				$("#divTabMenu > div").addClass('long');
			}else{
				$("#divTabMenu > div").removeClass('long');
				$("#divTabMenu").mThumbnailScroller("destroy");
			}
		});
	};
	// Quick Menu Mouseover
	$(document).on('mouseover','.quickList li a',function(e){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		var text1 = $(this).children('img').attr('src');
		var text2 = text1.replace('quick','quickOn');
		$(this).children('img').attr('src',text2);
	});
	$(document).on('mouseout','.quickList li a',function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		var text1 = $(this).children('img').attr('src');
		var text2 = text1.replace('quickOn','quick');
		$(this).children('img').attr('src',text2);
	});

});