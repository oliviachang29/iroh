const sheety_link = "https://api.sheety.co/868c6085-df08-4d33-905d-c94a98bda3f6";
var items;
var scroll = new SmoothScroll('a[href*="#"]');
var current_joke_index;

function format(text) {
	return text.replace(/\n/g, "<div class='spacer'></div>")
}

function getNew() {
	var new_index = Math.floor(Math.random() * items.length);
	while (new_index == current_joke_index) {
		new_index = Math.floor(Math.random() * items.length);
	}
	var newItem = items[new_index];
	$('#text').html(format(newItem.quote));
	$('#episode').text(format(newItem.episode));
	console.log(newItem.quote)
	console.log(format(newItem.quote))
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

$(document).keypress(function(e) {
  getNew()
});

$("body").keydown(function(e) {
  if(e.keyCode == 39) { // right
    getNew()
  }
});