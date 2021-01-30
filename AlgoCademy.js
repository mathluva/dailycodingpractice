/* ######################### SIMPLE ARRAY SORT####################################################*/

arr = [5, 9, 3, 6, 2, 1, 3, 2, 7, 5], k = 4

function kSmallest(nums) {
    nums.sort((first,last) => first-last); //sort array in asc order
            return nums;
        
};

console.log(kSmallest(arr)); //[1, 2, 2, 3, 3,5, 5, 6, 7, 9]






/* ########################## SMALLEST K INTEGERS - O(n log n)  ###################################################

Given an array of positive integers nums, return the smallest k values

Example:

Input: nums = [5, 9, 3, 6, 2, 1, 3, 2, 7, 5], k = 4
Output: [1, 2, 2, 3]*/

arr = [5, 9, 3, 6, 2, 1, 3, 2, 7, 5], k = 4

function kSmallest(nums,k) {
    nums.sort((first,last) => first-last);
    return nums.slice(0,k);
    
};

console.log(kSmallest(arr,k)); //[ 1, 2, 2, 3 ]




/* ############################# SORT SELECTION (BY SWAPPING POSITIONS) ################################################*/
arr = [3,1,3,4,5,4]

function sort(nums) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
              if(nums[i] > nums[j]){
                  [nums[i], nums[j]] = [nums[j], nums[i]]; //swap position
              }
        }
     }
    return nums;
};

console.log(sort(arr)); //[ 1, 3, 3, 4, 4, 5 ]




/* ############################# TWO SUM -O(n^2) ################################################


Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input will have at most one solution, and you may not use the same index twice.

In case no solution exists, return [-1, -1]*/

arr = [2, 15, 11,7], target = 9

function twosums(nums,target){
    for(i= 0; i< nums.length; i++){
        for(j=0; j<nums.length-1; j++){
            if(nums[i] +nums[j]==target){
                return [i,j];
            }
        }
    }
    return [-1,-1];
}
console.log(twosums(arr, target)); //[ 3, 0 ]




/* ############################# FIND PEAK ELEMENT-O(n^2) ################################################
Find Peak Element - O(n)

A peak element is an element that is greater than its neighbors.

Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞.

Example 1:

Input: nums = [1, 2, 3, 1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1, 2, 1, 3, 5, 6, 4]
Output: 1 or 5 
Explanation: Your function can return either index number 1 where the peak element is 2, 
or index number 5 where the peak element is 6. */

arr = [1, 2, 1, 3, 5, 6, 4]
function peakelements(nums){
    let list = [] //list to push index of each peak
    for(let i =0; i< nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if (nums[i] <=nums[j]){
                i = i+1;
            }
            else{
                list.push(i); //if nums[i] > nums[j], push index of i to list
                i = i+1; //go to the next element
            }
         }
    }
    return list;
};
console.log(peakelements(arr));// [ 1, 5 ]

/*##################  Factorial using Recursion ########### */

function factorial(n) {
    let fact =1;
    for(let i = 1; i <= n; i++){
        fact = fact * i;
    }
    return fact;
}

console.log(factorial(4));//24

/*##################  Factorial using Recursion II ########### */

function factorial2(n) {
        if(n == 0){
            return 1;
        }
        else{
            return factorial(n-1) *n;
        }
    }
console.log(factorial2(5));//24


