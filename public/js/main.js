jQuery(document).ready(function(){
	jQuery('.navbar-toggle').click(function() {
		jQuery('.main-nav nav').toggleClass('mobile-menu');
	});

	jQuery('.dropdown').click(function(e) {
		e.preventDefault();
		jQuery('.dropdown ul').toggle(400);
	});

	jQuery('#slippry-demo').slippry({
		'controls':false,
		'auto':false
	})
});