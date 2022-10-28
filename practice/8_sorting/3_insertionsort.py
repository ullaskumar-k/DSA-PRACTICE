# PSEUDOCODE
# ->Start by picking the second element in Array
# ->Now compare the second element with the one before it and swap if necessary 
# ->Continue to the next element and if it is in incorrect order, iterate through the sorted position to place the element in correct place
# ->Repeat until array is sorted 
def insertionsort(a):
    for i in range(1,len(a)):
        val = a[i]
        j = i - 1
        while j>=0 and val<a[j]:
            a[j+1] = a[j]
            j -= 1
        a[j+1] = val
    print(a)

insertionsort([5,2,6,3,1,25,4])

