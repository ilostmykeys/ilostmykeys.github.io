
$(document).ready(function () {

	// DELAY STYLISH LINKS FROM REDIRECTING TO THE GIVEN URL 
	// BEFORE THE ANIMATION IS COMPLETE

	$('.link-stylish-container a').click(function(event){
		var redirect_url = $(this).attr('href');
		$(".link-arrow").addClass(' link-arrow-move');
		setTimeout( function() { window.location = redirect_url }, 500 );
		event.preventDefault();
	});

	// NEWSLETTER'S FORM VALIDATION CHECK
	// EMAIL IS REQUIRED

	$('.footer-newsletter>form').validate({
		rules: {
			email: {
				required: true
			}
		}
	});

	// NAVIGATION TOGGLE

	$('#nav-toggle').click(function(){
		$('#main-nav ul').toggle('fast');
		$('#nav-toggle').toggleClass('small');
	});



	// CHECK IF WINDOW'S WIDTH IS GREATERT THAN 550;
	// PREVENTS MENU FROM STAYING HIDDEN AFTER CHANGING VIEWPORT'S WIDTH.

	$(window).resize(function(){ 
		pageWidth = $(window).width();

		if (pageWidth => 550) {
			$('#main-nav ul').show('fast');
		}
	});


});