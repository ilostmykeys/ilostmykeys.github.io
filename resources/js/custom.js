$(document).ready(function() {
	
	var popup = $('#popup');
	
	// DISPLAY POPUP AFTER 3 SECONDS
	
	timer = setTimeout(function(){
		$('#popup').css('display','block');
	}, 1000);
	
	// CLOSE POPUP ON CLICK
	
	$('#popup-overlay').click(function(){
		if ( popup.css('display', 'block') ) {
			popup.css('display', 'none');
		}
	});
	
	$('#popup-close').click(function(){
		popup.css('display', 'none');
	});
	
});