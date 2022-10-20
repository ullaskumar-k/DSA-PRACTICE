# Write a function called same, which accepts two arrays. The function should return true if every value in 
# the array has its corresponding value squared in the second array. The frequency of values must be the same.

#  same([1,2,3],[4,1,9]) //true
#  same([1,2,3],[1,9]) //false
#  same([1,2,1],[4,4,1]) //false (must be same frequency) 

import timeit as t
# 1st try
# def same(a,b):
#     if len(a) != len(b):
#         return False
#     count = 0    
#     for i in a:
#         for j in b:
#             if i ** 2 == j:
#                 count += 1
#     if count == len(a):
#         return True
#     return False


def same(a,b):
    if len(a) != len(b):
        return False    
    for i in a:
        try:
            d = b.index(i**2)
        except:
            return False    
        b.pop(d)
    return True    

a = t.timeit()

v = same([1,2,3],[4,1,9])
print(v)                   
    
b = t.timeit()
time = b-a
print(f"Time Elapsed is {time} seconds")