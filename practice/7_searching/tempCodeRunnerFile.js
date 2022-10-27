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
