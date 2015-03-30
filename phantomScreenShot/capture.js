var system = require('system');
var args = system.args;

// var scriptName = args[0];
// extract url from sytem arguments
var url = args [1];
// load webpage module
var page = require('webpage').create();
// 
phantom.onerror = function(){
	var msgStack = ["PHANTOM ERROR: " + msg];
	if(trace && trace.length) {
		msgStack.push('TRACE:');
		trace.forEach(function(t){
			msgStack.push('->' + t.file || t.soureURL) + ':' + t.line
		});
	}
	console.error(msgStack.join('\n') );
	phantom.exit(1);
};
if(args.length<2){
	throw new Error( 'Name argument is missing');
}

// set viewport size
page.viewportSize = {
	width: 1200,
	height: 1000
};


page.open(url, function(status){
	console.log('****************');
	console.log('opened ' + url + 'with status: ' + status);
	page.render('image-1200.png');
	console.log('rendered image of ' + url ' with width of 1200px');
// redefine viewport
	page.viewportSize = {
		height: 1000,
		width: 800
	};

	page.render('image-800.png');
	console.log('rendered image of' + url + ' with width of 800px');

	page.viewportSize = {
		height: 1000,
		width: 500
	};

	page.render('image-500.png');
	console.log('rendered image of ' + url + ' with width of 500px');

	page.clipRect = {
		top: 0,
		left: 0,
		width: 500,
		height: 300
	};
	page.render('image-header-500.png');
	phantom.exit();
});