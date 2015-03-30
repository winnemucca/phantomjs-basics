var url = "http://www.packtpub.com/";

var page = require('webpage').create();

page.open(url,function(status){
	console.log('***************');
	console.log('Opened ' +url +' with status ' + status + '\n');

	var bestsellerList = page.evaluate(function(){

		var bestSellerElements = document.querySelectorAll('#featured-books-inner .book-block-title');
		var bestsellerData = [];

		for(var i =0; i <bestSellerElements.length;i++){
			bestsellerData.push(bestSellerElements[i].innerHTML.trim() );
		}
		console.log('best seller data',bestsellerData)
		return bestsellerData;
	});
	console.log('curent bestsellers at pckt publishing are: ');
	for(var j=0; j<bestsellerList.length;j++){
		console.log( (j + 1)+ ' |' + bestsellerList[j] );
	}

	phantom.exit();
});