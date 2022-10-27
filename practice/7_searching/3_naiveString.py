# PSUEDOCODE
# ->Define function that accepts 2 strings
# ->Loop over the longer String
# ->Loop over the shorter String
# ->If the characters dont match, breakout of the inner Loop
# ->If the characters do match, keep going
# ->If you complete the inner loop and find a match, increment the count of matches
# ->Return the count


# def Naive(str1,str2):
#     i,d,count,o = 0,0,0,0
#     for k in range(0,len(str1)):
#         i,d = k,0 
#         for j in range(0,len(str2)):
#             try:
#                 if(str1[i]==str2[j] and d<len(str2)):
#                     d += 1
#             except:
#                 pass
#             i += 1
#             if d == len(str2):
#                 count += 1
#     print(count)    
# Naive("abdabdefgabd","abd")



# def Naive(str1,str2):
#     if len(str2)>len(str1): 
#         print("Enter valid second string")
#     i,d = 0,0
#     count = 0
#     for k in range(0,len(str1)):
#         i,d = k,0 
#         for j in range(0,len(str2)):
#             # print(f"{i} == {j}")
#             if(str1[i]==str2[j] and d<=len(str2)):
#                 d += 1
#             if d == len(str2):
#                 count += 1
#             i += 1
#             if i == len(str1):
#                 return print(count)
# Naive("abdefggabdabdabd","abd")


def Naive(str1,str2):
    if len(str2)>len(str1): 
        print("Enter valid second string")
    count,i,j,k,d = 0,0,0,0,0
    while(k!=len(str1)):
        i = k
        d,j = 0,0
        while(j!=len(str1)):
            if str1[i] == str2[j] and d<len(str2):
                d += 1
            if d == len(str2):
                count += 1
            i += 1
            j += 1    
        if k == len(str1):
            return print(count)
        k+=1              

Naive("abdefggabdabdabd","abd")


