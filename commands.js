var exports = module.exports  = {};
var fs = require('fs');
var request = require('request');


exports.pwd = function(){
	process.stdout.write(process['mainModule'].paths[0]);
	process.stdout.write('\nprompt > ');
}

exports.ls = function(){
	fs.readdir('.', function(err, files) {
  		if (err) throw err;
  		files.forEach(function(file) {
    	process.stdout.write(file.toString() + "\n");
  	})
  process.stdout.write("prompt > ");
});
}

exports.echo = function(arg){
	process.stdout.write(arg);
	process.stdout.write("\nprompt > ");
}

exports.cat = function(file){
	fs.readFile(file, function(err, data){
		if (err){
			throw err;
		}
		process.stdout.write(data.toString() + "\n");
		process.stdout.write("prompt > ");
	})
	
}

exports.head = function(file){
	fs.readFile(file, function(err, data){
		if (err){
			throw err;
		}

		var fileArr = data.toString() + "\n";
		fileArr = fileArr.split('\n').slice(0,5);
		process.stdout.write(fileArr.join('\n'));
		process.stdout.write("\nprompt > ");
	})	
}

exports.tail = function(file){
	fs.readFile(file, function(err, data){
		if (err){
			throw err;
		}

		var fileArr = data.toString() + "\n";
		fileArr = fileArr.split('\n').slice(-6);
		process.stdout.write(fileArr.join('\n'));
		process.stdout.write("\nprompt > ");
	})	
}

exports.sort = function(file){
	fs.readFile(file, function(err, data){
		if (err){
			throw err;
		}

		var fileArr = data.toString() + "\n";
		fileArr = fileArr.split('\n').sort();
		process.stdout.write(fileArr.join('\n'));
		process.stdout.write("\nprompt > ");
	})	
}

exports.wc = function(file){
	fs.readFile(file, function(err, data){
		if (err){
			throw err;
		}

		var fileArr = data.toString() + "\n";
		fileArr = fileArr.split('\n');
		process.stdout.write(fileArr.length.toString());
		process.stdout.write("\nprompt > ");
	})	
}

exports.uniq = function(file){
	fs.readFile(file, function(err, data){
		if (err){
			throw err;
		}

		var fileArr = data.toString() + "\n";
		fileArr = fileArr.split('\n');
		var finalArr = [];
		for (var i = 0; i < fileArr.length; i++){
			if (fileArr[i] !== fileArr[i+1]){
				finalArr.push(fileArr[i])
			}
		}
		process.stdout.write(finalArr.join('\n'));
		process.stdout.write("\nprompt > ");
	})	
}

exports.curl = function(file){
	request(file, function(err, response, body){
		console.log('error:', err); // Print the error if one occurred
  		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  		console.log('body:', body); // Print the HTML for the Google homepage.
	})
		// .get(file)
		// .on('response', function(response, body){
		// 	if (response.statusCode === 200){
		// 		process.stdout.write(body.toString());
		// 	}
		// })

}
