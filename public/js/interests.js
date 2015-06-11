jQuery(document).ready(function($){
	var $interestsSection = $('.interests-section');

	//hide icons out of the viewport
	$interestsSection.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.hobby-icons, .icon').addClass('hide-icons');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$interestsSection.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.4 && $(this).find('.hobby-icons').hasClass('hide-icons') ) {
				$(this).find('.hobby-icons, .icon').removeClass('hide-icons').addClass('show-icons');
			}
		});
	});
});