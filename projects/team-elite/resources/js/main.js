
// MAIN-NAVIGATION - TOGGLER

var mainNav = $('#main-nav');

var effectType = 'slide';
	// Default menu reveal effect : slide
	// Other options: puff, slide

var effectDirection = 'right';
	// Default menu reveal direction : right
	// Other options: left, right, up, down

$('#toggle-nav').click(function(){

	mainNav.toggle(effectType, { direction: effectDirection }, 400);

});

$(window).resize(function(){

	pageWidth = $(document).width();

	// Check if window's width is greater than 950.
	// Show main-navigation if true.
	// Prevents menu from staying hidden after changing
	// viewport's width.

	if ( pageWidth >= 950 ) {

		$('#main-nav').show('fast');
		$('#main-n')

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

$(document).ready(function(){

	// StickyMenu feature
	// If you want to enable this, change 'stickyMenu' to true;

	stickyMenu = true;

	// Check if StickyMenu is defined. Prevends console errors.
	if ( typeof stickyMenu !== 'undefined' ) {

		// Check if page === index, if not, prepend some
		// linebreaks to prevent the menu from overlapping any content.
		// It's not wrong if it works, right ?
		if ( !$('#main-header').hasClass('index-page') ) {
			$('body').prepend('<br><br><br>');
		}

		if ( stickyMenu === true ) {
			$('#main-header').css({
				'position'     :'fixed',
				'zIndex'       :'99',
			});
		}

	}

	// Back to the Top !
	// If you want to enable this, change 'backTop' to true;

	backTop = true;

	// Check if backTop is defined. Prevends console errors.
	if ( typeof backTop !== 'undefined' ) {

		if ( backTop === true ) {

			$(window).scroll(function(){
				var scroll = $(window).scrollTop();
				var backTop = $('.backTop');
				if ( scroll >= 500 ) {
					backTop.show('puff', 200);
					backTop.on('click', function(){
						$('html, body').animate({
							scrollTop: 0
						}, 500);
					});
				} else {
					backTop.hide('puff', 200);
				}
			});

		}
	}

});