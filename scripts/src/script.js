
/* author rebekah david <rldavid@unca.edu> */


function main() {

	var s = new Spotter("twitter.search",
						{q:"'super bowl'", period:120},				//{key:"value", key:"value"},    120 period will take a 120 s break between the 750ms of feed output... //JSON becoming standard interchange format b/w computers... developed as alt to XML... like XML but lighter
						{buffer:true, bufferTimeout:750}		//this JSON code contains setup for the Spotter itself... buffer... bufferTimeout gives you the Twitter data every x seconds
						);
	var count = 0 ;
	var tweetCount = 0;
						
	s.register(function(tweet) {								//.register function allows you to send an anonymous function like in jQuery  function() {}

		count = count+1;
		var color;
		tweetCount = tweetCount + 1;

		var profile_image = "<img src='"+tweet.profile_image_url+"' />";
		
		if(count%2 === 0) {
			color = "magenta";
		} else {
			color = "cyan";
		}
		
		var new_paragraph = $("<p class='"+color+"'>"+profile_image+tweet.text+"</p>");	
 			new_paragraph.hide();

			$("#tweets").prepend(new_paragraph);
			new_paragraph.slideDown();

			$("#tweets p:even").css('background-color','#6666cc');
			$("#tweets p:odd").css('background-color','#F90909');
			$("#tweets p").css('color','black');
			$("#tweets p:first-child").css('background-color','black');
			$("#tweets p:first-child").css('color','white');
			$("#tweets p:first-child").css('font-weight','bold');
			$("#tweets p:first-child").css('font-family','sans-serif');
			
																		//somewhere here add the tweet to the DOM w/ an idCount
																		//  var idToRemove = tweetArray.unshift();
	
																		// $("#"+idToRemove).remove();
			if (tweetCount === 11)	{
				$("#tweets p:last-child").remove();
				tweetCount = 10;
			}

/*			$('#tweets p').hover(function() {							//hover changes color, bgcolor, border, weight
				$(this).css('color','#000000');
				$(this).css('backgroundColor','#cc33cc');
				$(this).css('font-weight','bold');
				$(this).css('border','2px solid #000000');
			}, function() {
				$(this).css('color','#000000');
				$(this).css('backgroundColor','#eeeeff');
				$(this).css('font-weight','normal');
				$(this).css('border','none');
			});					*/
		// }
	});

	
	s.start();							//starts our Spotter constructor!

}

main();
