var ij = impress();

$(document).ready(function() {
	ij.init();
	var to = setTimeout( function() {
		$("#impress").animate({
			opacity: 1
		}, 1000);
	}, 500)
});