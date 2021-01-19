healthy = ['kale', 'broccoli']
backpack = ['pizza', 'frozen', 'apple', 'kale']

backpack[:] = [item for item in backpack if item in healthy]
#keep item in backpack but only if in healthy, [:] slice method
#creates a new list name backback

print(backpack)

#same code using loop
healthy_backpack = []
for item in backpack:
    if item in healthy:
        healthy_backpack.append(item)
print(healthy_backpack)

squares = []

for i in range(10):
    squares.append(i**2)
print(squares)

#same code above, condensed
squares = [i**2 for i in range(10)]
print(squares)
#if you only want even numbers 
squares = [i**2 for i in range(10) if i%2 ==0]
print(squares)

#Remove items from list
arr= ['p', 'f', 'a', 'k','g', 'h']

item = arr.pop(3)
print(item) #assign index 2 item in arr to variable name item

print(arr)#prints arr without 'a'

del arr[arr.index('a'):]
print(arr) #keeps all the values before 'a'

#get rid of dups
arr = [1,5,2,3,4,4,5,5,6,7]
while arr.count(4) >0:
    arr.remove(4)
print(arr) #removes every number 4 in the list

#slicing
print(arr[1:5]) #grabs items index 1, 2,3,4
arr2 = arr[:] #two different list with same items
print(arr2)


for i in arr2[:]: #whenever you want to remove items from a list use a copy and not the list
    if i == 5: #if you don't make a copy it will not remove all instances of 5
        arr2.remove(i)
print(arr2)

arr = [1,5,2,3,4,4,5,5,6,7]

#or you can assign empty list

new_arr = []
for item in arr:
    if item != 5:
        new_arr.append(i)
arr = new_arr
print(arr)




