# import timeit as t

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

# 2nd try
# def same(a,b):
#     if len(a) != len(b):
#         return False    
#     for i in a:
#         try:
#             d = b.index(i**2)
#         except:
#             return False    
#         b.pop(d)
#     return True    

# a = t.timeit()

# v = same([1,2,3],[4,1,9])
# print(v)                   
    
# b = t.timeit()
# time = b-a
# print(f"Time Elapsed is {time} seconds")


# frequency counter method
def same(a,b):
    if len(a) != len(b):
        return False
    fc1 = {}
    fc2 = {}
    for key in a:
        try:
            fc1[key] = (fc1[key] or 0) + 1
        except KeyError:
            pass     
    for key in b:
        try:
            fc2[key] = (fc2[key] or 0) + 1
        except KeyError:
            pass     
    for key in fc1:
        if(not(key**2 in fc2)):
            return False
        if(not(fc1[key] == fc2[key**2])):
            return False
    return True


v = same([1,2,3],[4,1,9])
print(v)                   