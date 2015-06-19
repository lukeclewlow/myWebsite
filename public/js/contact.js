jQuery(document).ready(function($){
	var $contactSection = $('.contact-section');

	//hide icons out of the viewport
	$contactSection.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			console.log("OH");
			$(this).find('.contact-icons, .icon').addClass('hide-icons');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$contactSection.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.4 && $(this).find('.contact-icons').hasClass('hide-icons') ) {
				console.log("I");
				$(this).find('.contact-icons, .icon').removeClass('hide-icons').addClass('show-icons');
			}
		});
	});
});