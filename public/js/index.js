$(document).ready(function scrolling() {

    $(".link").click(function(event) {

    	event.preventDefault();

    	$('html, body').animate({
      	scrollTop: $( $(this).attr('href')).offset().top
    	}, 900);
  });
});