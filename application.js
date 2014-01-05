$(document).ready(function() {
	$(".date").html(function() {
		var today = (["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date()).getDay()]);
		$(this).html("Happy " + today + ".");
	})
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