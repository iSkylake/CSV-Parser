var fs = require('fs');

fs.readFile('data.csv', function(err, csvData){
	if(err){
		console.log(err);
	} else {
		var arrLine = csvData.toString().split('\r\n');

		var str = '';
		var arrData = [];
		var header = [];

		for(i=0; i<arrLine.length; i++){
			var arr = [];
			var index = 0;
			while(index <= arrLine[i].length){
				if(arrLine[i][index] === '"'){
					do{
						str += arrLine[i][index];
						index++;
					} while(arrLine[i][index] !== '"');
					str += arrLine[i][index];
					index++;
				} else if(arrLine[i][index] === ',' || index === arrLine[i].length){
					if(i === 0){
						header.push(str);
					} else {
						arr.push(str);
					}
					index += 2;
					str = '';
				} else {
					str += arrLine[i][index];
					index++;
				}
			}
			if(arr.length > 1){
				arrData.push(arr);
			}
		}
		console.log(header);
		console.log(arrData);
	}
});