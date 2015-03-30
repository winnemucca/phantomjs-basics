// console.log('hello world');
var system = require('system');
var os = system.os;

var args = system.args;

var scriptName = args[0];
var name = args[1];
// extract url from sytem arguments
var url = args [2];
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
console.log('hey ' + name + "how are you\n" + 'you are on' + os.architecture + '' + os.name + ' machine' + ' you executed ' + args[0] +'\n' + " opening" +url + '...');

page.open(url, function(status){
	console.log('****************');
	console.log('opened ' + url + 'with status: ' + status);

	page.render('image.png');
	phantom.exit();
})
// phantom.exit();