var fs = require ('fs')
var word = "ursul";

fs.readFile('lastList.txt','utf8',function(err, data){
	if(err) console.error(err);
	data = data.split(",");
	console.log(typeof data);
	//console.log(data)
	for(var key in data){
		if(data[key] ===word){
			console.log("true")	
		}
	}
})