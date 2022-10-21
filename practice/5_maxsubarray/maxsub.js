// Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
// The function should calculate the maximum sum of n consecutive elements in the array.

// maxSubarraySum([1,2,5,2,8,1,5],2) //10
// maxSubarraySum([1,2,5,2,8,1,5],4) //17
// maxSubarraySum([4,2,1,6],1) //6
// maxSubarraySum([4,2,1,6,2],4) //13
// maxSubarraySum([],4) //null

// 1st try
// function maxSubarraySum(a,k){
//     if(a.length<k){
//         return null;
//     }
//     var temp_sum = 0;
//     var sum = 0;
//     for(let i=0;i<a.length;i++){
//         temp_sum = 0;
//         for(let j=0;j<k;j++){
//             temp_sum = temp_sum + a[i+j];
//         }
//         if(temp_sum>sum){
//             sum = temp_sum;
//         }

//     }
//     console.log(sum);   

// }

//Sliding Window Pattern
function maxSubarraySum(a,k){
    if(a.length<k){
        return null;
    }
    var sum = 0;
    for(let i=0;i<k;i++){
        sum += a[i];
    }
    var temp = sum;
    for(let i=k;i<a.length;i++){ //4216 
        temp = temp + a[i] - a[i-k];
        if(temp>sum){
            sum = temp;
        }
    }
    console.log(sum)
}

// maxSubarraySum([1,2,5,2,8,1,5],2) //10
// maxSubarraySum([1,2,5,2,8,1,5],4) //17
maxSubarraySum([4,2,1,6],1) //6
// maxSubarraySum([4,2,1,6,2],4) //13
// maxSubarraySum([],4) //null