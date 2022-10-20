# Given two strings, write a function to determine if the second string is an anagram of the first.
# An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

# validAnagram("","") //true
# validAnagram("aaz","zza") // false
# validAnagram("anagram","nagaram") // true
# validAnagram("rat","car") // false
# validAnagram("awesome","awesom") // false
# validAnagram("qwerty","qeywrt") // true 
# validAnagram("texttwisttime","timetwisttext") // true

def validAnagram(a,b):
    if len(a) != len(b):
        return False
    fc1 = {}
    fc2 = {}
    try:
        for i in a:
            fc1.update({i:(fc1.get(i) or 0)+1})
    except:
        pass
    try:
        for i in b:
            fc2.update({i:(fc2.get(i) or 0)+1})
    except:
        pass
    k = list(fc1.keys())
    l = list(fc2.keys())
    for i in k:
        try:
            if(not(i in l)):
                return False
            if(not(fc1.get[i] == fc2.get[i])):
                return False    
        except:
            pass
    return True    


# v = validAnagram("","") #true
# v = validAnagram("aaz","zza") #false
# v = validAnagram("anagram","nagaram") #true
# v = validAnagram("rat","car") #false
# v = validAnagram("awesome","awesom") #false
#v = validAnagram("qwerty","qeywrt") #true 
#v = validAnagram("texttwisttime","timetwisttext") #true

v = validAnagram("rar","raa")
print(v)

