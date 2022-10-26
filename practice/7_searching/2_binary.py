# ->This function accepts a sorted array and a value 
# ->Create a left pointer on start of the array, and a right pointer at the end of the array
# ->While the left pointer comes before the right pointer
#     ->Create a pointer in the middle 
#     ->If you find value you want, return the index
#     ->If value is too small, move left pointer towards right 
#     ->If value is too innerHeight, move right pointer to left
# ->If you never find the value, return -1    
def binary(arr,val):
    l = 0
    r = len(arr)-1
    mid = int((l+r)/2)
    while arr[mid]!=val and l <= r:
        if val>arr[mid]:
            l = mid + 1
        else:
            r = mid - 1
        mid = int((l+r)/2) 
    if arr[mid] == val:
        print(mid)
    else:
        print(-1)

binary([1,2,3,4,5],6)                   