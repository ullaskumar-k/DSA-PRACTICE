# PSEUDOCODE
# ->Store the first element as the smallest value you have seen so far
# ->Compare the item to the next item in the array until you find a min 
# ->If a min number is found, designate that min number to be new min and continue until end of the array
# ->If min is not the value you initially begin with, swap two values
# ->Repeat this with the next element until the array is sorted

def selectionsort(arr):
    for i in range(len(arr)):
        min = arr[i]
        for j in range(i+1,len(arr)):
            if arr[j] < arr[i]:
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
    print(arr)                
selectionsort([5,2,6,8,14,3])

