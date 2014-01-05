$(document).ready(function() {
	$( ".basecard, .highcard, .campcard").hover(function() {
		$( "center .first" ).toggle();
	});
	$( ".basecard").hover(function() {
		$( "center .bc" ).toggle();
	});
	$( ".highcard").hover(function() {
		$( "center .hr" ).toggle();
	});
	$( ".campcard").hover(function() {
		$( "center .cc" ).toggle();
	});
});