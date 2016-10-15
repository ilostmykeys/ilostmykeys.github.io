
// MAIN-NAVIGATION - TOGGLER

var mainNav = $('#main-nav ul');
var spaceAdded;

$('#toggle-nav').click(function(){

	mainNav.toggle('slide', { direction: 'right' }, 400);

});

// CHECK IF WINDOW'S WIDTH IS GREATERT THAN 920;
// PREVENTS MENU FROM STAYING HIDDEN AFTER CHANGING VIEWPORT'S WIDTH.

$(window).resize(function(){

	pageWidth = $(document).width();

	if ( pageWidth >= 950 ) {

		$('#main-nav ul').show('fast');

	}

	if ( spaceAdded == true ) {

		$('#main-header').animate({ marginBottom: '10px' });

	}
		
});

// Prevent both menu and toggler from staying hidden
// by checking if main-navigation is visible every 2 seconds.

setInterval(function(){

	// If not visible
	if ( !mainNav.is(':visible') ) {
		
		$('#toggle-nav').show('slide', 100);

	}

}, 2000);