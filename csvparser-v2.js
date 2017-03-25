var fs = require('fs');

fs.readFile('data.csv', function(err, csvData){
	if(err){
		console.log(err);
	} else {
		var arrLine = csvData.toString().split('\r\n');

		var str = '';
		var arrAll = [];

		for(i=0; i<arrLine.length; i++){
			var arr = [];
			var index = 0;
			while(index <= arrLine[i].length){
				if(arrLine[i][index] === ',' || index === arrLine[i].length){
					arr.push(str);
					index += 2;
					str = '';
				} else {
					str += arrLine[i][index];
					index++;
				}
			}
			arrAll.push(arr);
		}

		console.log(arrAll);
	}
});