// PSUEDOCODE
// ->Define function that accepts 2 strings
// ->Loop over the longer String
// ->Loop over the shorter String
// ->If the characters dont match, breakout of the inner Loop
// ->If the characters do match, keep going
// ->If you complete the inner loop and find a match, increment the count of matches
// ->Return the count

function Naive(str1,str2){
    if(str1.length<str2.length){
        return console.log("Enter proper string 2")
    }
    let count = 0;
    let i = 0;let k = 0;let j = 0;let d=0;
    while(k!=str1.length-1){
        while(str1[i]==str2[j] && d!=str2.length){
            d++;i++;j++;
            if(d == str2.length){
                count++;
            }
            if(i == str1.length){
                return console.log(count);
            }
        }
        d=0;k++;i=k;j=0;
    }
}

Naive("ab","abd")