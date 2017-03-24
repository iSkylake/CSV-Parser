var fs = require('fs');

fs.readFile('data.csv', function(err, csvData){
	if(err){
		console.log(err);
	} else {
		var arr = csvData.toString().split('\r\n'); // '\r\n' is for Windows files, for Linux use '\n' and for Mac use '\r'

		// console.log(arr[0]);
		var header = [];
		var infoArr = [];

		for(i=0; i<arr.length; i++){
		var first = 0;
		var last = 0;
		var index = 0;
		var tempArr = [];

			while(index < arr[i].length){
				if(arr[i][index] === '"'){
					first = index;
					index++;
					while(arr[i][index] !== '"'){
						index++;
					}
				}
				if(arr[i][index] === ',' || index === arr[i].length-1){
					if(index === arr[i].length-1){
						last = index + 1;
					} else{
						last = index;
					}
					if(i === 0){
						header.push(arr[i].substring(first, last));	
					} else {
						tempArr.push(arr[i].substring(first, last));
					}			
					index = index + 2;
					first = index;
				} else{
					index++;
				}
			}
			if(tempArr.length > 0){
				infoArr.push(tempArr);
			}
		}

		var jsonData = [];

		for(i=0; i<infoArr.length; i++){
			var obj = {};
			for(j=0; j<infoArr[i].length; j++){
				obj[header[j]] = infoArr[i][j]
			}
			jsonData.push(obj);
		}

		console.log(jsonData);

		// var header = arr[0].split(', ');
		// var jsonData = [];

		// for(i=1; i<arr.length; i++){
		// 	var obj = {};
		// 	var data = arr[i].split(', ');
		// 	for(j=0; j<data.length; j++){
		// 		obj[header[j]] = data[j];
		// 	}
		// 	jsonData.push(obj);
		// }
		// console.log(jsonData);
	}
});