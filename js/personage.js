head.ready(function() {	

	// first ipopo
	var idleTimer 	= null,
		idleState 	= false,
		idleWait 	= 10000,
		ipPers 		= $('.js-person'),
		ipText 		= $('.js-person-text'); 
	 
	$(document).on('mousemove keydown scroll', function(){
		clearTimeout(idleTimer);
		if(idleState == true){ 
			ipText.removeClass('is-active');
			setTimeout(function(){
				ipPers.removeClass('is-active');
			}, 300);
		}
	
		idleState = false;
		idleTimer = setTimeout(function(){ 
			setTimeout(function(){
				ipText.addClass('is-active');
			}, 1000);
			ipPers.addClass('is-active');
			idleState = true; 
		}, idleWait);
	});
	
	$('body').trigger("mousemove");
	
	
	// ipopo paid
	var ipopoPaid = $('.js-person-paid'),
		ipopoText = $('.js-person-paid-text');

	$('.js-paid').on('click', function(){
		ipopoPaid.addClass('is-active');
		setTimeout(function(){
			ipopoText.addClass('is-active');
		}, 1000);
		if(ipopoPaid.hasClass('is-active')) {
			setTimeout(function(){
				ipopoText.removeClass('is-active');
				setTimeout(function(){
					ipopoPaid.removeClass('is-active');
				}, 300);
			}, 6000);
		}
		return false;
	});
	

});