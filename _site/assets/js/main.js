const sheety_link = "https://api.sheety.co/868c6085-df08-4d33-905d-c94a98bda3f6";
var items;
var scroll = new SmoothScroll('a[href*="#"]');

function getNew() {
	var newItem = items[Math.floor(Math.random() * items.length)];
	$('#text').text(newItem.quote);
	$('#episode').text(newItem.episode);
	scroll.animateScroll(0);
}

jQuery(window).on("load", function(){
    $.getJSON(sheety_link, function(data) {
		items = data;
		getNew()
		$('.initially-hidden').css({
	        opacity: 1,
	    })
	})
});

$('#reload').on("click",function(){
	getNew()
})