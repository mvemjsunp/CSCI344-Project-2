



/* author rebekah david <rldavid@unca.edu> */


function main() {
	



	$("#search_button").click(function() {
		$('#mask').hide();
		$('.window').hide();
//		alert($("#term").val());
//		console.log("whatever"); 		//another way to debug
		firstSpotterObject();
		secondSpotterObject();
	});
	
	
	// $("#inputsection").keyup(function(e) {		 //to make enter/return act as submit 
	// 	if(e.keyCode == "13") {
	// 		$("#nothing_yet").hide();
	// 		$(".parts_of_speech").fadeIn("slow");
	// 		$("#tweets").animate({height: "135px"});
	// 		main();
	// 	}
	// });
	
	
//	if (bartopCount > 30) {
	 	
	// }
}

		var bartopCount = 0;
		var secondTweetCount = 0;

function firstSpotterObject() {
		var firstTweetCount = 0;
		var firstSize = 0;


		var first = new Spotter("twitter.search",
						{q:$("#term1").val(), period:20},
						{buffer:true, bufferTimeout:400}
						);

				first.register(function(tweet) {	
					var color;
					firstSize = firstSize + 1;
//					firstTweetCount = firstTweetCount + 1;
					

							
					var profile_image = "<img src='"+tweet.profile_image_url+"' />";

					 var new_paragraph = $("<div class='boxleftyes'>"+'&nbsp;'+"</div>");
					var tweetpopup = $("<div class='tweetshow'><p>testing</p>"+tweet.text+"</div>");
  					new_paragraph.hide();
					firstTweetCount = firstTweetCount + 1;
 					$("#search1").append(new_paragraph);
 					new_paragraph.fadeIn();
					$(new_paragraph).hover(
						function () {
							$(new_paragraph).append($(tweetpopup));
							$('.tweetshow').css('visibility', 'visible');
							$(this).stop().fadeTo('slow',0.1);

					});		
							// new_paragraph = $("<div class='boxleftyes'>"+'&nbsp;'+"<div class='tweetshow'><p>"+tweet.text+"</p></div></div>");
							// $('.tweetshow').css('visibility', 'visible');	


				// 	new_paragraph.hover(function() {
				// 	new_paragraph = $("<div class='boxleftyes'>"+'&nbsp;'+"<div class='tweetshow'><p>"+tweet.text+"</p></div></div>");
				// 	$('.tweetshow').css('visibility', 'visible');
				// )};

					// $('.tweetshow').hover(
					// function() {
					//     	$(this).stop().fadeTo('slow',0.4);
					// },
					// function() {
					//     	$(this).stop().fadeTo('slow',1);
					// });



					var new_leftBoxTop = $("<div class='boxleftyes'>"+'&nbsp;'+"</div>");
  					new_leftBoxTop.hide();
					bartopCount = bartopCount + 1;
 					$("#bartop").prepend(new_leftBoxTop);
 					new_leftBoxTop.fadeIn();
					
					
					// if(tweet.text.match($("#term1").val())) {
					//     color = "'boxleftyes'";
					// } else {
					//     color = "'boxleftno'";
					// }
					
					if (firstTweetCount === 20)	{
					 	$("#search1 div:first-child").remove();
					 	firstTweetCount = 19;
					 }

				});
		first.start();
};
			
			
function secondSpotterObject() {

		var secondSize = 0;

		var second = new Spotter("twitter.search",
						{q:$("#term2").val(), period:20},
						{buffer:true, bufferTimeout:400}
						);	

				second.register(function(tweet) {	
					var color;
					secondSize = secondSize + 1;
//					firstTweetCount = firstTweetCount + 1;

					var profile_image = "<img src='"+tweet.profile_image_url+"' />";

					var new_paragraph = $("<div class='boxrightyes'>"+'&nbsp;'+"</div>");
  					new_paragraph.hide();
					secondTweetCount = secondTweetCount + 1;
 					$("#search2").append(new_paragraph);
 					new_paragraph.fadeIn();

					var new_rightBoxTop = $("<div class='boxrightyes'>"+'&nbsp;'+"</div>");
  					new_rightBoxTop.hide();
					bartopCount = bartopCount + 1;
 					$("#bartop").prepend(new_rightBoxTop);
 					new_rightBoxTop.fadeIn();


					// if(tweet.text.match($("#term1").val())) {
					//     color = "'boxleftyes'";
					// } else {
					//     color = "'boxleftno'";
					// }

					if (secondTweetCount === 300)	{
					 	$("#search2 div:first-child").remove();
					 	secondTweetCount = 299;
					 }
						
				});
		second.start();
};

							//starts our Spotter constructor!



$(document).ready(function() {
	main();
});
