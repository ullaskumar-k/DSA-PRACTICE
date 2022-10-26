# ->This function accepts a sorted array and a value 
# ->Create a left pointer on start of the array, and a right pointer at the end of the array
# ->While the left pointer comes before the right pointer
#     ->Create a pointer in the middle 
#     ->If you find value you want, return the index
#     ->If value is too small, move left pointer towards right 
#     ->If value is too innerHeight, move right pointer to left
# ->If you never find the value, return -1    