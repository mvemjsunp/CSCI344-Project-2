
/* author rebekah david <rldavid@unca.edu> */


function main() {

	var savlfood = new Spotter("twitter.search",
						{q:"#avlfood", period:120},				//{key:"value", key:"value"},    120 period will take a 120 s break between the 750ms of feed output...
						{buffer:true, bufferTimeout:750}		//this JSON code contains setup for the Spotter itself... buffer... bufferTimeout gives you the Twitter data every x seconds
						);
	var count = 0 ;
	var tweetCount = 0;
						
	savlfood.register(function(tweet) {								//.register function allows you to send an anonymous function like in jQuery  function() {}

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

			$("#avlfood").prepend(new_paragraph);
			new_paragraph.slideDown();

			$("#avlfood p").css('background-color','black');
			$("#avlfood p").css('color','white');
			
																		//somewhere here add the tweet to the DOM w/ an idCount
																		//  var idToRemove = tweetArray.unshift();
	
																		// $("#"+idToRemove).remove();
			if (tweetCount === 11)	{
				$("#avlfood p:last-child").remove();
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


		var savlbiz = new Spotter("twitter.search",
							{q:"#avlbiz", period:120},
							{buffer:true, bufferTimeout:750}
							);
		var countBiz = 0 ;
		var tweetCountBiz = 0;

		savlbiz.register(function(tweet) {					

			countBiz = countBiz+1;
			tweetCountBiz = tweetCountBiz + 1;

			var profile_image = "<img src='"+tweet.profile_image_url+"' />";

			var new_paragraph = $("<p>"+profile_image+tweet.text+"</p>");	
	 			new_paragraph.hide();

				$("#avlbiz").prepend(new_paragraph);
				new_paragraph.slideDown();

				$("#avlbiz p").css('background-color','black');
				$("#avlbiz p").css('color','white');

				if (tweetCountBiz === 11)	{
					$("#avlbiz p:last-child").remove();
					tweetCountBiz = 10;
				}
		});
				
				
				var savlart = new Spotter("twitter.search",
									{q:"#avlart", period:120},
									{buffer:true, bufferTimeout:750}
									);
				var countArt = 0 ;
				var tweetCountArt = 0;

				savlart.register(function(tweet) {					

					countArt = countArt+1;
					tweetCountArt = tweetCountArt + 1;

					var profile_image = "<img src='"+tweet.profile_image_url+"' />";

					var new_paragraph = $("<p>"+profile_image+tweet.text+"</p>");	
			 			new_paragraph.hide();

						$("#avlart").prepend(new_paragraph);
						new_paragraph.slideDown();

						$("#avlart p").css('background-color','black');
						$("#avlart p").css('color','white');

						if (tweetCountArt === 11)	{
							$("#avlart p:last-child").remove();
							tweetCountArt = 10;
						}

		});

	savlfood.start();							//starts our Spotter constructor!
	savlbiz.start();
	savlart.start();
}

main();
