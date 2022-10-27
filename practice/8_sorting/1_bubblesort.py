# PSEUDOCODE
# ->Function that accepts a array and that are numbers
# ->Start looping from with a variable called i from the end of the array to the beginning
# ->Start an inner loop with a variable called j from the beginning until i-1
# ->If arr[j] is greater than arr[j+1], swap those two values
# ->Return the sorted array
def bubblesort(a):
    for i in range(len(a),0,-1):
        for j in range(0,len(a)-1):
            if a[j] > a[j+1]:
                temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp
    print(a)            

bubblesort([50,60,2,55,3,1])