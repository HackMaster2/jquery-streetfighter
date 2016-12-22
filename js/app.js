$(document).ready(function(){
	$(".ryu").mouseenter(function() {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	});
	
  $(".ryu").mouseleave(function() {
		/* ************************************
		 jQuery Street Fighter Part Three - JS
		 ************************************** */

		/* 1. When we have the mouse leave, we want Ryu to get back into the still position
		   To do so, let's hide .ryu-ready and show .ryu-still
		   *Hint* See the code above, it's similar to that but the other way around! */
		$(".ryu-ready");
		$(".ryu-still");
	});

	/* 2. We're missing an event. We want Ryu to shoot a fireball when he is clicked.
		 Go ahead and add back the click event to the function below */
  $(".ryu").(function() {

		/* 3. When we have the mouse down, we want Ryu shoot a fireball
		 To do so, let's hide BOTH .ryu-ready and .ryu-still */

		Ryu.fireball();
	});
	
	$("body").keydown(function(e) {

		/* 4. We're missing the keycode for on line 36 and line 45.
		   Keycodes is how our browser can determine what specific keyboard key has been entered.
		   They are most often used in key event handlers such as this one.
		   Use Google to find out what keycode is for 'x' is.
		   Then use then enter that number value in both line 36 and line 45.
		 */
		if(e.keyCode == ) {
			$(".ryu-ready").hide();
			$(".ryu-cool").show();
			$(".ryu-still").hide();
		}
	});
	
  $("body").keyup(function(e) {
		if(e.keyCode == ) {
			/* And... we're done! Go preview index.html to see the fruits of our labor! */
			/* Then afterwards remember to submit the project */
			/* git add . */
			/* git commit -m "something" */
			/* git push origin master */
			/* Submit your Github project link in the Project Submission Form with name jQuery Street Fighter */
			$(".ryu-ready").show();
			$(".ryu-cool").hide();
			$(".ryu-still").hide();
		}
	});
});
