# add numbers from 1 to n (including n)
def add(n):
    total = 0
    for i in range(n+1):
        total += i
    return total    
print(add(6))    