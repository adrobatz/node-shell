// console.log(process)

process.stdout.write('prompt > ')

var commands = require('./commands');
var fs = require('fs');


process.stdin.on('data', function(data){
	var cmd = data.toString().trim(); // remove the newline
	var args = '';
	var separator = cmd.indexOf(' ');

	if (separator !== -1){
		args = cmd.slice(separator).trim();
		cmd = cmd.slice(0, separator);
	}

	if (commands[cmd]){
		commands[cmd](args)
	}

	 else if (cmd === 'date'){
		var date = new Date()
		process.stdout.write(date.toString());
	}
  	
})