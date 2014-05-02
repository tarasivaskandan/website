$(document).ready(function() {
	var height = $("#section2").height();
	$(".button-row").height(0.5 * height);

	$(".button, #contact-me").hover(function(data) {
		$(this).css("background", "#1a798c");
	}, function(data) {
		$(this).css("background", "#16a8c5");
	});


	$(".modal").hide();


	$(".exit-modal").hover(function(data) {
		$(this).css("background", "#B95959");
	}, function(data) {
		$(this).css("background", "#de6868");
	});

	$(".exit-modal").click(function(data) {
		$(".modal").fadeOut();
		$("#overlay").css("opacity", "0.0");
	});	

//TOKYO//

	$("#tokyo-button").click(function(data) {
		$(".modal").hide();
		$("#overlay").css("opacity", "0.75");
		$("#tokyo-modal").fadeIn();	
	});

//IOWA//

	$("#iowa-button").click(function(data) {
		$(".modal").hide();
		$("#overlay").css("opacity", "0.75");
		$("#iowa-modal").fadeIn();	
	});

//BERKELEY//

	$("#berkeley-button").click(function(data) {
		$(".modal").hide();
		$("#overlay").css("opacity", "0.75");
		$("#berkeley-modal").fadeIn();	
	});

//SINGAPORE//

	$("#singapore-button").click(function(data) {
		$(".modal").hide();
		$("#overlay").css("opacity", "0.75");
		$("#singapore-modal").fadeIn();	
	});

});

