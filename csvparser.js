var fs = require('fs');

fs.readFile('data.csv', function(err, csvData){
	if(err){
		console.log(err);
	} else {
		var arr = csvData.toString().split('\r\n');

		console.log(arr[0]);
		var header = [];

		var first = 0;
		var last = 0;
		var index = 0;

		while(index < arr[0].length){
			if(arr[0][index] === '"'){
				first = index;
				index++;
				while(arr[0][index] !== '"'){
					index++;
				}
				index++;
			}
			if(arr[0][index] === ',' || index === arr[0].length-1){
				if(index === arr[0].length-1){
					last = index + 1;
				} else{
					last = index;
				}
				header.push(arr[0].substring(first, last));
				index = index + 2;
				first = index;
			} else{
				index++;
			}
		}

		console.log(header);

		// var header = arr[0].split(', ');
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