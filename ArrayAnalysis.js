var arr = [];
var max = arr[0];
var min = arr[0];
var avg = arr[0];
var i = 0;
var evens = [];
var numSummitted = 0;
var evensresponse = "";
function arraySubmit(){
	numSummitted = Number(document.getElementById("AddArray").value);
	arr[i] = numSummitted;
	i++;
	document.getElementById("response").innerHTML = numSummitted + " was added to the array!";
	
}
function analyzeArray(temp){
	console.log(arr)
	max = temp[0];
	min = temp[0];
	evens = [];
	var total = 0;
	var k = 0;
	for (j = 0; j < temp.length; j++){
		if (temp[j] > max){
			max = temp[j];
		}
		if (temp[j] < min){
			min = temp[j];
		}
		if (temp[j] % 2 == 0){
			evens[k] = temp[j];
			k++;
		}
		total += temp[j];
	}
	avg = total / (temp.length);
	
}
function arrayCalculate(){
	analyzeArray(arr);
	document.getElementById("response2").innerHTML = max + " is the maximum value in the array";
	document.getElementById("response3").innerHTML = min + " is the minimum value in the array";
	document.getElementById("response4").innerHTML = avg + " is the average of the array!";
	evensresponse = "The even values in the array are";
	if(evens.length == 0){
		document.getElementById("response5").innerHTML = "There are no evens";
	}else if(evens.length == 1){
		document.getElementById("response5").innerHTML = "The only even value is " + evens[evens.length-1] + "!";
	}else{
		for(j = 0; j < evens.length-1; j++){
			evensresponse += " " + evens[j] + ",";
		}
			document.getElementById("response5").innerHTML = evensresponse + " and " + evens[evens.length-1] + "!";
	}
}