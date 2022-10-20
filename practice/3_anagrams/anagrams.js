// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// validAnagram("","") //true
// validAnagram("aaz","zza") // false
// validAnagram("anagram","nagaram") // true
// validAnagram("rat","car") // false
// validAnagram("awesome","awesom") // false
// validAnagram("qwerty","qeywrt") // true 
// validAnagram("texttwisttime","timetwisttext") // true

function validAnagram(a,b){
    if(a.length != b.length){
        return false;
    }
    let fc1 = {};
    let fc2 = {};
    for(let i in a){
        fc1[a[i]] = (fc1[a[i]] || 0) + 1;
    }
    for(let i in b){
        fc2[b[i]] = (fc2[b[i]] || 0) + 1;
    }
    for(let key in fc1){
        if(!(key in fc2)){
            return false;
        }
        if(!(fc1[key] == fc2[key])){
            return false;
        }
    }
    return true;
}

v = validAnagram("texttwisttime","timetwisttext")
console.log(v)
