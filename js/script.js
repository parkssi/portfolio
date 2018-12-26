$(function(){

		$(window).load(function(){
			$(".slideImage").mCustomScrollbar({horizontalScroll:true});
		});


		$('nav li a').click(function(){
			$(this).next('p').toggle(300);
			$(this).parent().siblings().find('a').next('p').slideUp(300);
			return false;
		});

		$('.m_estimate a').click(function(){
			$('.popBg, #pop_estimate').fadeIn(300);
			return false;
		});

		$('#pop_estimate .close').click(function(){
			$('.popBg, #pop_estimate').fadeOut(300);
			$('#pop_estimate td input, #pop_estimate td textarea').val('');
			$('.wpcf7-not-valid-tip, .wpcf7-response-output').hide();
		});

		$('.slides ul li:last').addClass('last');

});