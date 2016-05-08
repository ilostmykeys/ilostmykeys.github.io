$(document).ready(function () {

	$('.link-stylish-container a').click(function(event){
		var redirect_url = $(this).attr('href');
		$(".link-arrow").addClass(' link-arrow-move');
		setTimeout( function() { window.location = redirect_url }, 500 );
		event.preventDefault();
	});

});