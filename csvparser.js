var fs = require('fs');

fs.readFile('data.csv', function(err, csvData){
	if(err){
		console.log(err);
	} else {
		var arr = csvData.toString().split('\r\n');

		var header = arr[0].split(', ');
		var jsonData = [];

		for(i=1; i<arr.length; i++){
			var obj = {};
			var data = arr[i].split(', ');
			for(j=0; j<data.length; j++){
				obj[header[j]] = data[j];
			}
			jsonData.push(obj);
		}
	}
});