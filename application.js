$(document).ready(function() {
	$( ".basecard, .highcard, .campcard").hover(function() {
		$( "center h1.first" ).toggle();
		$( "center h5.first " ).toggle();
	});
	$( ".basecard").hover(function() {
		$( "center h1.bc" ).toggle();
		$( "center h5.bc" ).toggle();
		$("#cards img.bc").toggle();
	});
	$( ".highcard").hover(function() {
		$( "center h1.hr" ).toggle();
		$( "center h5.hr" ).toggle();
		$("#cards img.hr").toggle();
	});
	$( ".campcard").hover(function() {
		$( "center h1.cc" ).toggle();
		$( "center h5.cc" ).toggle();
		$("#cards img.cc").toggle();
	});
});