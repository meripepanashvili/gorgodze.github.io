var image_prop = 1.76;
var out_of_prop = null;
var skroll;

var resize_image = function() {
	var w_height = $(window).height();
	var w_width = $(window).width();
	var team = $('.team');
	if(w_width/w_height > image_prop) {
		if(out_of_prop == null || out_of_prop == false){
			out_of_prop = true;
			team.css('background-size', '100% auto');
		}
	} else {
		if(out_of_prop == null || out_of_prop == true) {
			out_of_prop = false;			
			team.css('background-size', 'auto 100%');
		}
	}
};
	
(function(window, document){
	window.onbeforeunload = function () {
	  window.scrollTo(0, 0);
	}

	$(window).load(function(){
        skroll = skrollr.init({
            forceHeight:false,
            documentElementId : "main-container",
        });
		resize_image();
	});

	$(window).resize(function(){
		resize_image();	
		skroll.refresh();
	});

})(window, document);

