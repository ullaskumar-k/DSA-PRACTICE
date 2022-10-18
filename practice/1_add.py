# add numbers from 1 to n (including n)
import timeit as t
def add(n):
    total = 0
    for i in range(n+1):
        total += i
    return total    

a = t.timeit()
d = add(6)    
b = t.timeit()
time = b-a
print(d)
print("Time Elapsed is {} seconds".format(time))