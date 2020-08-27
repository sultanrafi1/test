$(document).ready(function() {
	
	var scrollLink = $('.smooth-scroll');
	
		  // Smooth scrolling
		scrollLink.click(function(e) {
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top -10
		}, 1500 );
		});
		
	})