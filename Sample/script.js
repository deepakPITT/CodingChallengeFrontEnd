$(document).ready(function() {
	startTime();
	setHeight();
	$('#floatableDiv').css('top','100px');
	$('#floatableDiv').css('left',($('#mainSection').width() - $('#floatableDiv').width())/2);
	if($(window).height() < $('#mainSection').height() + $('header').height()) {
		$('footer').css('top', '450px');
		$('footer').css('position', 'absolute');
	}
	else {
		$('footer').css('top', 'auto');
		$('footer').css('position', 'fixed');
	}
	$("input[name='position']").change(function(){
		if($("input[name='position']:checked").val().toLowerCase().trim() == "center") {
			$('#upperText').text("Center");
			$('#floatableDiv').css('top','100px');
			$('#floatableDiv').css('left',($('#mainSection').width() - $('#floatableDiv').width())/2);
		}
		else {
			$('#upperText').text("Lower Right");
			$('#floatableDiv').css('top','auto');
			$('#floatableDiv').css('left','auto');
			$('#floatableDiv').css('bottom',0);
			$('#floatableDiv').css('right',0);
		}
	});
	$(document).keyup(function(e) {
		if (e.keyCode == 27) { // escape key maps to keycode `27`
			$('#floatableDiv').css('display','none');
		}
	});
	$(document).keyup(function(e) {
		if (e.keyCode == 13) { // escape key maps to keycode `27`
			$('#floatableDiv').css('display','block');
		}
	});
	$(function() {
		$( "#floatableDiv" ).draggable({ 
		containment: "parent",
		start: function() {
			$('#upperText').text("Floating...");
		}
	  });
	});
});

$(window).resize(function(){
	if($('#floatableDiv').offset().left > $(window).width()) {
		$('#floatableDiv').css('left',$(window).innerWidth()-($('#floatableDiv').width()/2));
	}
	if($(window).height() < $('#mainSection').height() + $('header').height()) {
		$('footer').css('top', '450px');
		$('footer').css('position', 'absolute');
	}
	else {
		$('footer').css('top', 'auto');
		$('footer').css('position', 'fixed');
	}
	setHeight();
	
	if($('#upperText').text().toLowerCase().trim()== "center"){ 
	
	$('#upperText').text("Center");
			$('#floatableDiv').css('top','100px');
			$('#floatableDiv').css('left',($('#mainSection').width() - $('#floatableDiv').width())/2);
		}
});

function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('clock').innerHTML =
	h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 500);
}

function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}

function setHeight() {
	$('#mainSection').height("400px");
	$('#mainSection').css('top', $('header').height());
}