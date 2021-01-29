

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

barr = [1,5,2,3,4,4,5,5,6,7]

for i in barr:
    print(i)
print(barr)


print(barr[::2]) #prints barr but only every other number
print(barr[::-1]) #prints barr reversed

####### INSERT INTO MIDDLE OF LIST ######

days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri']

days.insert(2, 'Snicker') #index, "data"

print(days) #['Mon', 'Tues', 'Snicker', 'Wed', 'Thurs', 'Fri']

####### REMOVE ELEMENT FROM LIST BY VALUE######

days.remove('Fri')
print(days) #'Mon', 'Tues', 'Snicker', 'Wed', 'Thurs']


####### REMOVE ELEMENT FROM LIST BY INDEX######
del days[2]
print(days)#['Mon', 'Tues', 'Wed', 'Thurs']

####### REMOVE ELEMENT WITH POP######
popped = days.pop(1)
print(popped) # Tues

####### REMOVE ELEMENT FROM LIST USING DEL AND SLICE######
days= ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri']

del days[0:2] #remove index 0 and 1
print(days) #['Wed', 'Thurs', 'Fri']

days= ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri']
del days[-2:] #remove the last 2 (start 2 from right and go to the end)
print(days)# ['Mon', 'Tues', 'Wed']


for item in days[:]: #uses copy to keep index
    if item == "Mon":
        days.remove(item)
print(days) #['Tues', 'Wed']

days[:]=[item for item in days if item!='Tues']
print(days) #[['Wed']]

############ REVERSE LIST ##########
arr = [1,5,2,3,4,4,5,5,6,7]

arr.reverse()
print(arr) #[7, 6, 5, 5, 4, 4, 3, 2, 5, 1]

for i in range(len(arr)//2): #iterate through half the elements
    arr[i], arr[-i-1] = arr[-i-1], arr[i] #may use a temp variable to swap
print(arr)

arr_reversed = []
for i in reversed(arr[:]):
    arr_reversed.append(i) 
print(arr) #[1, 5, 2, 3, 4, 4, 5, 5, 6, 7]
print(arr_reversed) # [7, 6, 5, 5, 4, 4, 3, 2, 5, 1]

####### REVERSE USING SLICING##########
arr[:]=arr[::-1]
print(arr) #7, 6, 5, 5, 4, 4, 3, 2, 5, 1]

##########  SORT LIST   #########
days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri']

days.sort()
print(days) #['Fri', 'Mon', 'Thurs', 'Tues', 'Wed']
            #sorts in alphabetical order



print(sorted(days)) #['Fri', 'Mon', 'Thurs', 'Tues', 'Wed']

arr.sort()
print(arr)#[1, 2, 3, 4, 4, 5, 5, 5, 6, 7] #put in numerical order

data = [1,32,54,67,83,4,11,-3,100,2]

######### SORT DATA IN REVERSE ORDER #############

data = [1,32,54,67,83,4,11,-3,100,2]

data.sort()
data.reverse() #[100, 83, 67, 54, 32, 11, 4, 2, 1, -3]
print(data)

data = [1,32,54,67,83,4,11,-3,100,2]

sorted_data = sorted(data, reverse = True)
print(data) #[100, 83, 67, 54, 32, 11, 4, 2, 1, -3]


# ######## SORT STRINGS ########

# random = ['a','AA', 'aa', 'AAA', 'HeLLo', 'b', 'c', 'a']
# print(sorted(random))


# Python function to sort the array arr[0..n-1] in wave form, 
# i.e., arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >= arr[5] 
######  SELECTION SORT #########

data = [1,32,54,67,83,4,11,-3,100,2]

#use ((list_a)-1) bc once down to last element there is 
    #no need to compare

def selection_sort(list_a):
    
    index_length = range(0,len(list_a)-1)
    for i in index_length:
        min_value = i
        
        for j in range(i+1,len(list_a)): #all elements to right of where we are
            if list_a[j] < list_a[min_value]:
                min_value = j
      
        if min_value != i: #if min value is no longer i
            list_a[min_value], list_a[i] = list_a[i], list_a[min_value]
        
    print(list_a)

selection_sort(data) #[-3, 1, 2, 4, 11, 32, 54, 67, 83, 100]


############ Binary Search(used to find a number in the list) #########
data = [1,32,54,67,83,4,11,-3,100,2] 

def binary_search(sequence, item): #find item in the sequence (already sorted list)
    begin_index = 0
    end_index = len(sequence) -1

    while begin_index <= end_index:
        midpoint = begin_index + (end_index - begin_index) // 2
            #midpoint should be in the middle of begin_index and rest of items
        midpoint_value = sequence[midpoint]
        if midpoint_value == item:
            return midpoint #return the position

        elif item< midpoint_value:
            end_index = midpoint - 1 #check items to the left
        
        else: 
            begin_index = midpoint +1 #check items to right by reposition the begin index
    return None #if item not find in loop, while loop breaks

print(binary_search(sorted(data), 4)) #returns 3 because 4 is index 3 position


#######Using Counter to count occurences of item in an array ########
from collections import Counter

data = ['a', 'b','c', 'b', 'a', 'a']
tally = Counter(data)
print(tally) # Counter({'a': 3, 'b': 2, 'c': 1})
print(tally.values()) #dict_values([3, 2, 1])

pairs = 0
for val in tally.values():
    pairs = val
print(pairs)

def fizzBuzz(n):
   if n % 3 ==0 and n % 5 ==0:
        print('FizzBuzz')
   elif n%3 ==0 and n%5 !=0:
        print('Fizz')
   elif n% 5 ==0 and n%3 != 0:
        print('Buzz')
   elif n%5 !=0 or n%3!=0:
    print(n)
fizzBuzz(82)