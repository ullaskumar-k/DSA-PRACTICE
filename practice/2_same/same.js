/*
Write a function called same, which accepts two arrays. The function should return true if every value in 
the array has its corresponding value squared in the second array. The frequency of values must be the same.
*/

// same([1,2,3],[4,1,9]) //true
// same([1,2,3],[1,9]) //false
// same([1,2,1],[4,4,1]) //false (must be same frequency) 

//1st try
// function same(a,b){
//     if(a.length != b.length){
//         return false;
//     }
//     var count = 0;
//     for(let i=0;i<a.length;i++){
//         for(let j=0;j<b.length;j++){
//             if(a[i]*a[i] == b[j])
//                 count++;                  
//         }
//     }
//     if (count == a.length)
//         return true;
//     else
//         return false;
// }

function same(a,b){
    if(a.length != b.length){
        return false;
    }
    var count = 0;
    for(let i=0;i<a.length;i++){
        let d = b.indexOf(a[i] ** 2);
        if(d === -1){
            return false;                  
        }
        b.splice(d,1);
    }
    return true;
}

v = same([1,2,3],[4,1,9]);
console.log(v);

