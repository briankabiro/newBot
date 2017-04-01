var fs = require ('fs')
var word = "woolrich";

fs.readFile('lastList.txt','utf8', function(err, data){
	if(err) console.error(err);
	var jaundice = data.split(",");
	jaundice.forEach(function(brand){
		if(brand == word){
			console.log('found it')
		}else{
			console.log('nada')
		}
	})
})