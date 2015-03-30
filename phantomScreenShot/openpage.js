var page =  require('webpage').create();

var url = 'http://phantomjs.org/quick-start.html';

page.viewportSize = {
	width: 1280,
	height: 900
};

page.clipRect = {
	top: 0,
	left:0,
	width: 1280,
	height: 1280
};

page.onConsoleMessage - function(msg){
	console.log('message: ' + msg)
};

page.open(url,function(status){
	page.evauate(function(){
		console.log(document.title)
	});
	page.render('screenshot.png');
	phantom.exit();
});