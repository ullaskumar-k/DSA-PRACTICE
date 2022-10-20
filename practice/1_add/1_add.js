// add numbers from 1 to n (including n)
function addUpTO(n){
    let total = 0;
    for(let i = 0;i<=n;i++){
        total += i;
    }
    return total;
}

var t1 = performance.now();
a = addUpTO(1000000000);
var t2 = performance.now();
console.log(a);
b = (t2-t1)/1000;
console.log("Time Elapsed:"+ b +" seconds");