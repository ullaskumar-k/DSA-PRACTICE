# Pseudocode
# ->This function accepts an array and a value
# ->Loop through the array and check if the current array element is equal to the value
# ->If it is equal, return the index at which the element is found
# ->If the value is never found, return -1
def linear(arr,val):
    c = 1
    for i in range(0,len(arr)):
        if arr[i] == val:
            c -= 1
            print(arr.index(val))
    if c:
        print(-1)        

linear([1,2,3],5)