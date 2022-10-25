// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(b,e){
    if(e == 0){
        return console.log(1);
    }
    console.log(Math.pow(b,e));
}

power(2,0);
power(2,2);