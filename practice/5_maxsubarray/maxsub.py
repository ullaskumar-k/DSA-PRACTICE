# Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
# The function should calculate the maximum sum of n consecutive elements in the array.

# maxSubarraySum([1,2,5,2,8,1,5],2) //10
# maxSubarraySum([1,2,5,2,8,1,5],4) //17
# maxSubarraySum([4,2,1,6],1) //6
# maxSubarraySum([4,2,1,6,2],4) //13
# maxSubarraySum([],4) //null

# 1st try
# def maxSubarraySum(a,k):
#     if len(a) < k:
#         return None
#     sum = 0
#     temp = 0
#     for i in range(0,len(a)+1):
#         temp = 0
#         try:    
#             for j in range(0,k):
#                 temp += a[i+j]
#             if(temp>sum):
#                 sum = temp
#         except:
#             pass
#     print(sum) 

#Sliding window pattern
def maxSubarraySum(a,k):
    if len(a)<k:
        return None
    sum = 0   
    for i in range(0,k+1):
        sum += a[i]
    temp = sum 
    for i in range(0,len(a)-k+1):
        temp = temp + a[i] - a[i-k]
        if temp>sum:
            sum = temp
    print(sum)                   

# maxSubarraySum([1,2,5,2,8,1,5],2) #10
# maxSubarraySum([1,2,5,2,8,1,5],4) #17
maxSubarraySum([4,2,1,6],1) #6
# maxSubarraySum([4,2,1,6,2],4) #13
# maxSubarraySum([],4) #null
