jQuery(function( $ ){

	$.localScroll.defaults.axis = 'xy';
	

	$.localScroll.hash({
		target: '#templatemo_main', 
		queue:true,
		duration:1500
	});
	

	$.localScroll({
		target: '#templatemo_main', 
		queue:true,
		duration:1500,
		hash:true,
		onBefore:function( e, anchor, $target ){

		},
		onAfter:function( anchor, settings ){

		}
	});
});