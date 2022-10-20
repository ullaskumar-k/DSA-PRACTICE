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


// 2nd try 
// function same(a,b){
//     if(a.length != b.length){
//         return false;
//     }
//     var count = 0;
//     for(let i=0;i<a.length;i++){
//         let d = b.indexOf(a[i] ** 2);
//         if(d === -1){
//             return false;                  
//         }
//         b.splice(d,1);
//     }
//     return true;
// }


// Frequency counter method

function same(a,b){
    if(a.length !== b.length){
        return false;
    } 
    let fc1 = {}
    let fc2 = {}
    for(let i of a){
        fc1[i] = (fc1[i] || 0) + 1;
    }    
    for(let i of b){
        fc2[i] = (fc2[i] || 0) + 1;
    }    
    for(let i in fc1){
        if(!(fc1[i]**2 in fc2))
            return false;
        if(!(fc2[i**2] == fc1[i]))
            return false;    
    }
    return true;
}

v = same([1,2,3],[4,1,9]);
console.log(v);

