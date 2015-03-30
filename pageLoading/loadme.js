var page = require('webpage').create(),
system = require ('system'),
t,address;

if (system.args.length ===1){
	console.log('usage: loadspeed.js');
	phantom.exit();
}

t = Date.now();

address = system.args[1];
page.open(address,function(status){
	if(status !== 'success') {
		console.log('fail to load the address');
	}
	else {
		t = Date.now() - t;
		console.log('Loding ' + system.args[1]);
		console.log('Loading time ' + t + ' msec');
	}
	phantom.exit();

})
