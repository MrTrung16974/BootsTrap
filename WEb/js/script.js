$(document).ready(function() {
	$('div.top').click(function() {
		/* Act on the event */
		$('html,body').animate({
			scrollTop: 0
		}, 600);
	});
});

