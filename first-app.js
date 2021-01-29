// const fs = require('fs');
// fs.writeFileSync('hello.txt', 'Tiff')
// var name =  'Vlocity';
// function foo() {
//     name = "Dev";
//     return;
//     function name() {}

// }
// foo();
// console.log(name);
arr = [3,1,3,4,5,4]

function sorting(nums){
        for(let i = 0; i < nums.length-1; i++){
            for(let j = i+1; j < nums.length; j++){
                while (i<j){
                    if(nums[i] > nums[j]){
                        nums[i], nums[j] = nums[j], nums[i]
                    }
                    }
             return nums;  
            }
        }
    }
console.log(sorting(arr));
