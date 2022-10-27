// PSEUDOCODE
// ->Store the first element as the smallest value you have seen so far
// ->Compare the item to the next item in the array until you find a min 
// ->If a min number is found, designate that min number to be new min and continue until end of the array
// ->If min is not the value you initially begin with, swap two values
// ->Repeat this with the next element until the array is sorted
// function selectionsort(arr){
//     for(let i=0;i<arr.length;i++){
//         let k = 0;
//         min = arr[i];
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 min = arr[j];
//                 k = j;
//             }
//         }
//         if(min!=arr[i]){
//         let temp = arr[i];
//         arr[i] = min;
//         arr[k] = temp;
//     }
// }
    
//     console.log(arr);
// }
// selectionsort([5,2,6,8,14,3]);
// // 5,2,6,8,14,3








function selectionsort(arr){
    for(let i=0;i<arr.length;i++){
        let k = 0;
        min = arr[i];
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[i]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}
selectionsort([5,2,6,8,1,1,3]);
// 5,2,6,8,14,3