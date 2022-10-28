// PSEUDOCODE
// ->Start by picking the second element in Array
// ->Now compare the second element with the one before it and swap if necessary 
// ->Continue to the next element and if it is in incorrect order, iterate through the sorted position to place the element in correct place
// ->Repeat until array is sorted 

function insertionSort(a){
	var val;
    for(var i = 1; i < a.length; i++){
        val = a[i];
        for(var j = i - 1; j >= 0 && a[j] > val; j--) {
            a[j+1] = a[j]
        }
        a[j+1] = val;
    }
    console.log(a);
}

insertionSort([2,1,9,76,4])






