// Count Unique Values

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) //7
// countUniqueValues([]) //0
// countUniqueValues([-2,-1,-1,0,1]) //4


// 1st try

// function countUniqueValues(a){
//    let count = 0;
//    let i = -1;
//    let j = 1;
//    for(let k = 0; k<a.length;k++){
//      if(k==0){
//         if(a[k]!=a[j]){
//            count += 1;
//         }
//      }
//      if(k==a.length-1){
//         if(a[i]!=a[k]){
//            count += 1;
//         }
//      }
//      if(k!=0 && k!=a.length-1 && a[i]!=a[k] && a[k]!=a[j]){
//         count += 1;
//      }
//      i += 1;
//      j += 1;
//    }
//    console.log(count);
//   }
  
//   countUniqueValues([-2,-1,-1,0,1]);


// 2nd try
function countUniqueValues(a){
   let b = [];
   let j = 1;
   for(let i = 0;i<a.length;i++){
      if(a[i]!=a[j] || a[i]==a[j]){
         if(!b.includes(a[i])){
            b.push(a[i]);
         }
      }
   }
   console.log(b.length)
}
  
  countUniqueValues([-2,-1,-1,0,1]);