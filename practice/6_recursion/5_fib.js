// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. 
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
// which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// Iterative pattern
// function fib(num){
//     var arr = [];
//     for(let i=0;i<num;i++){
//         if(i==0||i==1){
//             arr.push(1);
//         }
//         if(i>1){
//             arr.push(arr[i-2]+arr[i-1]);
//         }
//     }
//     console.log(arr[arr.length-1]);
// }

// fib(10);

// function fib(num){
//     let a = 0;
//     function helper(v){
//         if(v == num){
//             return;
//         }
//         v=v+1;

//     }
//     helper(a);
// }



function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(4) )// 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465
