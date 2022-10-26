// ->This function accepts a sorted array and a value 
// ->Create a left pointer on start of the array, and a right pointer at the end of the array
// ->While the left pointer comes before the right pointer
//     ->Create a pointer in the middle 
//     ->If you find value you want, return the index
//     ->If value is too small, move left pointer towards right 
//     ->If value is too innerHeight, move right pointer to left
// ->If you never find the value, return -1    

function binary(arr,val){
    var l = 0;  
    var r = arr.length-1;
    var mid = Math.floor((l+r)/2);
    while(arr[mid]!=val && l<=r){
        if(arr[mid]>val){
            r = mid-1;
        }
        if(arr[mid]<val){
            l = mid+1;
        }
        mid = Math.floor((l+r)/2);
    }
    console.log(arr[mid] == val ? mid : -1);
}

binary([1,2,3,4,5],12);