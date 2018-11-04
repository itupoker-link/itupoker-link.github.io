$(document).ready(function($) {

	$(".linkfade").hover(function(){
		$(this).stop().animate({"opacity" : 0.5},300);
		},function(){
		$(this).stop().animate({"opacity" : 1},300);
	});
	
	$(".fadechange").hover(function(){
		$(this).stop().animate({"opacity" : 0},500);
		},function(){
		$(this).stop().animate({"opacity" : 1},500);
	});
	
	/*========Slider========*/
	var slideIndex = 0;
	var nextIndex = 0;
	var prevIndex = 0;
	$('#slider').cycle({
		 fx: 'fade',
		 easing:  'easeInOutBack',
		 after: function(currSlideElement, nextSlideElement, options) {
			slideIndex = options.currSlide;
			nextIndex = slideIndex + 1;
			prevIndex = slideIndex -1;
	
			if (slideIndex == options.slideCount-1) {
				nextIndex = 0;
			}
	
			if (slideIndex == 0) {
				prevIndex = options.slideCount-1;
			}
		}
	});
	
	$(".next").click(function () {
		$('#slider').cycle(nextIndex, "fade");
	});
	
	$(".prev").click(function () {
		$('#slider').cycle(prevIndex, "fade");
	});
	
	$('.contact').hover(function(){
		$(this).children('.social-detail').css('display','block');
		},function(){
		$(this).children('.social-detail').css('display','none');
	});
	
	
	/*========Deposit========*/
	var jackpotIndex = 0;
	var jackpotNextIndex = 0;
	var jackpotPrevIndex = 0;
	
	$('.jackpot').cycle({
		 fx: 'scrollLeft',
		 easing:  'easeInOutBack',
		 after: function(currSlideElement, nextSlideElement, options) {
			jackpotIndex = options.currSlide;
			jackpotNextIndex = slideIndex + 1;
			jackpotPrevIndex = slideIndex -1;
	
			if (jackpotIndex == options.slideCount-1) {
				jackpotNextIndex = 0;
			}
	
			if (jackpotIndex == 0) {
				jackpotPrevIndex = options.slideCount-1;
			}
		}
	});
	$(".jackpotNext").click(function () {
		$('.jackpot').stop().cycle(jackpotNextIndex, "scrollLeft");
	});
	
	$(".jackpotPrev").click(function () {
		$('.jackpot').stop().cycle(jackpotPrevIndex, "scrollRight");
	});
	
	/*========Deposit========*/
	var deposIndex = 0;
	var deposNextIndex = 0;
	var deposPrevIndex = 0;
	
	$('.deposit').cycle({
		 fx: 'scrollLeft',
		 easing:  'easeInOutBack',
		 after: function(currSlideElement, nextSlideElement, options) {
			deposIndex = options.currSlide;
			deposNextIndex = slideIndex + 1;
			deposPrevIndex = slideIndex -1;
	
			if (deposIndex == options.slideCount-1) {
				deposNextIndex = 0;
			}
	
			if (deposIndex == 0) {
				deposPrevIndex = options.slideCount-1;
			}
		}
	});
	$(".deposNext").click(function () {
		$('.deposit').stop().cycle(deposNextIndex, "scrollLeft");
	});
	
	$(".deposPrev").click(function () {
		$('.deposit').stop().cycle(deposPrevIndex, "scrollRight");
	});
	
	/*========Deposit========*/
	var withdrawIndex = 0;
	var withdrawNextIndex = 0;
	var withdrawPrevIndex = 0;
	
	$('.withdraw').cycle({
		 fx: 'scrollLeft',
		 easing:  'easeInOutBack',
		 after: function(currSlideElement, nextSlideElement, options) {
			withdrawIndex = options.currSlide;
			withdrawNextIndex = slideIndex + 1;
			withdrawPrevIndex = slideIndex -1;
	
			if (withdrawIndex == options.slideCount-1) {
				withdrawNextIndex = 0;
			}
	
			if (withdrawIndex == 0) {
				withdrawPrevIndex = options.slideCount-1;
			}
		}
	});
	$(".withdrawNext").click(function () {
		$('.withdraw').stop().cycle(withdrawNextIndex, "scrollLeft");
	});
	
	$(".withdrawPrev").click(function () {
		$('.withdraw').stop().cycle(withdrawPrevIndex, "scrollRight");
	});
	
	$('.banner-1').cycle({
		 fx: 'scrollLeft',
		 easing:  'easeInOutBack'
	});
	
	$('.banner-2').cycle({
		 fx: 'scrollRight',
		 easing:  'easeInOutBack'
	});
});