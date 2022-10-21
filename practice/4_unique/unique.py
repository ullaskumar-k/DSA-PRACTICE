# // Count Unique Values

# Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
# There can be negative numbers in the array, but it will always be sorted

# countUniqueValues([1,1,1,1,1,2]) // 2
# countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) //7
# countUniqueValues([]) //0
# countUniqueValues([-2,-1,-1,0,1]) //3

# 1st try
# def countUniqueValues(a):
#     i = -1
#     j = 1
#     count = 0
#     for k in range(0,len(a)):
#         if k == 0:
#             if(a[k]!=a[j]):
#                 count += 1
#         if k == len(a)-1:
#             if(a[i]!=a[k]):
#                 count += 1 
#         if k!=0 and k!=len(a)-1 and a[i]!=a[k] and a[k]!=a[j]:
#             count += 1
#         i += 1
#         j += 1
#     print(count)

# countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])

#2nd try
def countUniqueValues(a):
    j = 1
    b = []
    for i in range(0,len(a)+1):
        try:
            if a[i]==a[j] or a[i]!=a[j]:
                if a[i] not in b:
                    b.append(a[i])
            if j == len(a)-1 and a[j] not in b:
                b.append(a[j])    
        except:
            pass     
        j += 1        
    print(len(b))

countUniqueValues([1,1,1,1,1,2])