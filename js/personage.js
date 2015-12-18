head.ready(function() {	

	// $(window).load(function() {
	// 	setTimeout(function(){
	// 		$('.js-person').addClass('is-active');
	// 	}, 2000);
	// });

	var idleTimer 	= null,
		idleState 	= false,
		idleWait 	= 4000; 
	 
	$(document).on('mousemove keydown scroll', function(){
		clearTimeout(idleTimer);
		if(idleState == true){ 
			// console.log('hi');
			$('.js-person-text').removeClass('is-active');
			setTimeout(function(){
				$('.js-person').removeClass('is-active');
			}, 300);
		}
	
		idleState = false;
		idleTimer = setTimeout(function(){ 
			// console.log('where are you');
			setTimeout(function(){
				$('.js-person-text').addClass('is-active');
			}, 1000);
			$('.js-person').addClass('is-active');
			idleState = true; 
		}, idleWait);
	});
	
	$('body').trigger("mousemove");
});