$(document).ready(function(){
	$(".ryu").mouseenter(function() {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	});
	
  $(".ryu").mouseleave(function() {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	});

  $(".ryu").click(function() {
		$(".ryu-still").hide();
		$(".ryu-ready").hide();
		Ryu.fireball();
	});
	
	$("body").keydown(function(e) {
		if(e.keyCode == 88) {
			$(".ryu-ready").hide();
			$(".ryu-cool").show();
			$(".ryu-still").hide();
		}
	});

  $("body").keyup(function(e) {
		if(e.keyCode == 88) {
			$(".ryu-ready").show();
			$(".ryu-cool").hide();
			$(".ryu-still").hide();
		}
	});
});
