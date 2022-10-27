// PSEUDOCODE
// ->Function that accepts a array and that are numbers
// ->Start looping from with a variable called i from the end of the array to the beginning
// ->Start an inner loop with a variable called j from the beginning until i-1
// ->If arr[j] is greater than arr[j+1], swap those two values
// ->Return the sorted array
function bubblesort(arr){
    for(let i=arr.length; i>=0;i--){
        for(let j = 0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
}

bubblesort([50,2,6,52,1]);