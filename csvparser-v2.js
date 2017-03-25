var fs = require('fs');

fs.readFile('data.csv', function(err, csvData){
	if(err){
		console.log(err);
	} else {
		var arrLine = csvData.toString().split('\r\n');

		var str = '';
		var index = 0;
		var arr = [];

		while(index <= arrLine[0].length){
			if(arrLine[0][index] === ',' || index === arrLine[0].length){
				arr.push(str);
				index++;
				str = '';
			} else {
				str += arrLine[0][index];
				index++;
			}
		}

		console.log(arr);
	}
});