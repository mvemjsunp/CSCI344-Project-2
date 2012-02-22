



/* author rebekah david <rldavid@unca.edu> */


function main() {
	


	$("#search_button1").click(function() {
//		alert($("#term").val());
//		console.log("whatever"); 		//another way to debug
		firstSpotterObject();
	});
	
	
	$("#search_button2").click(function() {
		secondSpotterObject();
	});
	
//	if (bartopCount > 30) {
	 	
	// }
}

		var bartopCount = 0;


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

					
					// var new_boxleft = $("<p class='"+boxleft+"'>"+&nbsp+"</p>");
					// new_boxleft.hide();
					// tweetCount = tweetCount + 1;
					// $("#search1").prepend(new_boxleft);
					// new_boxleft.fadeIn();

//					 var new_paragraph = $("<div class='span1 "+color+"'>"+'testing'+"</div>");
					var new_paragraph = $("<div class='boxleftyes'>"+'&nbsp;'+"</div>");
  					new_paragraph.hide();
					firstTweetCount = firstTweetCount + 1;
 					$("#search1").append(new_paragraph);
 					new_paragraph.fadeIn();


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
					
					if (firstTweetCount === 500)	{
					 	$("#search1 div:first-child").remove();
					 	firstTweetCount = 499;
					 }

				});
		first.start();
};
			
			
function secondSpotterObject() {
		var secondTweetCount = 0;
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

					if (secondTweetCount === 500)	{
					 	$("#search2 div:first-child").remove();
					 	secondTweetCount = 499;
					 }
						
				});
		second.start();
};

							//starts our Spotter constructor!



$(document).ready(function() {
	main();
});
