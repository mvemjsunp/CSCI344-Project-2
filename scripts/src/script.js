



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
		var firstTweetCount = 0;
		var bartopCount = 0;
		var secondTweetCount = 0;

function firstSpotterObject() {

		var firstSize = 0;

		var first = new Spotter("twitter.search",
						{q:$("#term1").val(), period:20},
						{buffer:true, bufferTimeout:400}
						);

				first.register(function(tweet) {	
					var color;
					firstSize = firstSize + 1;
							
					var profile_image = "<img src='"+tweet.profile_image_url+"' />";

					var new_paragraph = $("<div class='boxleftyes'>"+'&nbsp;'+"</div>");
					
					//tweet text will popup when you hover over the representative box
					var tweetpopup = $("<div class='tweetshow'><p>testing</p>"+profile_image+tweet.text+"</div>");
					
  					new_paragraph.hide();
					firstTweetCount = firstTweetCount + 1;
 					$("#search1").append(new_paragraph);
 					new_paragraph.fadeIn();
					$(new_paragraph).mouseenter(function () {
							tweetpopup.hide();
							$(new_paragraph).append(tweetpopup);
							tweetpopup.fadeIn();
					});	
					$(new_paragraph).mouseleave(function() {
						tweetpopup.remove();
					});	
						
					//every time a new tweet box is added to the big section, it is added to the top section too. Goal is to show one search term's frequency compared to the other, but frequency of incoming tweets is too constant...
					var new_leftBoxTop = $("<div class='boxleftyes'>"+'&nbsp;'+"</div>");
  					new_leftBoxTop.hide();
					bartopCount = bartopCount + 1;
 					$("#bartop").prepend(new_leftBoxTop);
 					new_leftBoxTop.fadeIn();
					
					//only allow 100 tweet color boxes at once
					if (firstTweetCount === 100)	{
					 	$("#search1 div:first-child").remove();
					 	firstTweetCount = 99;
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

					var profile_image = "<img src='"+tweet.profile_image_url+"' />";


					var new_paragraph = $("<div class='boxrightyes'>"+'&nbsp;'+"</div>");
					
					//tweet text will popup when you hover over the representative box
					var tweetpopup = $("<div class='tweetshow'><p>testing</p>"+profile_image+tweet.text+"</div>");
					
  					new_paragraph.hide();
					firstTweetCount = firstTweetCount + 1;
 					$("#search2").append(new_paragraph);
 					new_paragraph.fadeIn();
					$(new_paragraph).mouseenter(function () {
							tweetpopup.hide();
							$(new_paragraph).append(tweetpopup);
							tweetpopup.fadeIn();
					});	
					$(new_paragraph).mouseleave(function() {
						tweetpopup.remove();
					});

					var new_rightBoxTop = $("<div class='boxrightyes'>"+'&nbsp;'+"</div>");
  					new_rightBoxTop.hide();
					bartopCount = bartopCount + 1;
 					$("#bartop").prepend(new_rightBoxTop);
 					new_rightBoxTop.fadeIn();


					if (secondTweetCount === 100)	{
					 	$("#search2 div:first-child").remove();
					 	secondTweetCount = 99;
					 }
						
				});
		second.start();
};


$(document).ready(function() {
	main();
});
