// add numbers from 1 to n (including n)
function addUpTO(n){
    let total = 0;
    for(let i = 0;i<=n;i++){
        total += i;
    }
    return total;
}

a = addUpTO(6)
console.log(a)