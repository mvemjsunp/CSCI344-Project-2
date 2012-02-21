



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
}

var firstSize = 0;
var secondSize = 0;

function firstSpotterObject() {
		var firstTweetCount = 0;


		var first = new Spotter("twitter.search",
						{q:$("#term1").val(), period:120},
						{buffer:true, bufferTimeout:750}
						);

				first.register(function(tweet) {	
					var color;
					firstSize = firstSize + 1;
//					firstTweetCount = firstTweetCount + 1;
							
					var profile_image = "<img src='"+tweet.profile_image_url+"' />";
					if(tweet.text.match($("#term1").val())) {
					    color = "'boxleftyes'";
					} else {
					    color = "'boxleftno'";
					}
					
					// var new_boxleft = $("<p class='"+boxleft+"'>"+&nbsp+"</p>");
					// new_boxleft.hide();
					// tweetCount = tweetCount + 1;
					// $("#search1").prepend(new_boxleft);
					// new_boxleft.fadeIn();

//					 var new_paragraph = $("<div class='span1 "+color+"'>"+'testing'+"</div>");
					var new_paragraph = $("<div class="+color+">"+'&nbsp;'+"</div>");
  					new_paragraph.hide();
					firstTweetCount = firstTweetCount + 1;
 					$("#search1").append(new_paragraph);
 					new_paragraph.fadeIn();
					
					if (firstTweetCount === 500)	{
					 	$("#search1 div:first-child").remove();
					 	firstTweetCount = 499;
					 }

				});
		first.start();
};
			
			
function secondSpotterObject() {
		var secondTweetCount = 0;


		var second = new Spotter("twitter.search",
						{q:$("#term2").val(), period:120},
						{buffer:true, bufferTimeout:750}
						);	
								
			var second = new Spotter("twitter.search",
							{q:$("#term2").val(), period:120},
							{buffer:true, bufferTimeout:750}
							);

					second.register(function(tweet) {	
						var color;
						secondSize = secondSize + 1;
						secondTweetCount = secondTweetCount + 2;

						var profile_image = "<img src='"+tweet.profile_image_url+"' />";
						if(secondTweetCount%2 === 0) {
						    color = "'red'";
						} else {
						    color = "'blue'";
						}

						var new_paragraph = $("<p class='"+color+"'>"+profile_image+tweet.text+"</p>");
	 					new_paragraph.hide();
	//					tweetCount = tweetCount + 1;
						$("#search2").prepend(new_paragraph);
						new_paragraph.fadeIn();

						if (secondTweetCount === 11)	{
						 	$("#search2 p:last-child").remove();
						 	secondTweetCount = 10;
						 }
						
				});
		second.start();
};

							//starts our Spotter constructor!



$(document).ready(function() {
	main();
});
