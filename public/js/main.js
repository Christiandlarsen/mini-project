jQuery(document).ready(function(){
	jQuery('.navbar-toggle').click(function() {
		jQuery('#main-nav nav').toggleClass('mobile-menu');
	});

	jQuery('.dropdown').click(function(e) {
		e.preventDefault();
		jQuery('.dropdown ul').toggle(400);
	});

	jQuery('#slippry-demo').slippry({
		'controls':false
	});

	jQuery('.gallery .img-wrapper').click(function() {
		jQuery('.gallery .img-wrapper').removeClass('active');
		jQuery(this).addClass('active');
	});

	jQuery('.nav-tabs li').click(function() {
		jQuery('.nav-tabs li').removeClass('active');
		jQuery(this).addClass('active');
	})
});