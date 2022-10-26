// Pseudocode
// ->This function accepts an array and a value
// ->Loop through the array and check if the current array element is equal to the value
// ->If it is equal, return the index at which the element is found
// ->If the value is never found, return -1
function linear(arr,val){
    let c = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==val){
            console.log(i);
            c++;
        }
    }
    if(!c){
        console.log("-1");
    }
}

linear([1,2,3],3)