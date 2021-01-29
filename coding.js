
// var values = [1,2,3,4,5];
// // var sum = values.reduce((a,b)=>a+b);
// // console.log(sum);
// // values.forEach(arraysum);
// var total = 0;

// import { stringify } from "querystring";

// // function arraysum(ar){
// //      var final =sum(ar);
// // // for(var i=0; i<ar.length;i++ ){
// // //      total = total+ar[i];
// // // };
// //      console.log(final);
// // }
// // arraysum(values);


// var sum =0;
// function simpleArraySum(ar) {
//      ar.forEach(i=>{
//          sum = sum + i;
//      });
//      console.log(sum);
//  }
//  simpleArraySum(values);

//Compare the triplets
// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// var final =[0,0];
// arr = [1, 2, 3];
// brr = [3, 2, 1];
// function score(a,b){
//     for(var i=0;i<a.length;i++);
//     if (a[i]>b[i]){
//         final[0] = final[0] +1;}

//     else if (a[i]<b[i]){
//         final[1] = final[1] +1;}
//     else (a[i]=b[i]);{
//         final[0] = final[0] +0;
//         final[1] = final[1] +0;
//     }
//     return final;
//     console.log(final);
   
// };


// score(arr,brr);
// console.log("h","k");


// function twoSum(nums, target) {
//     for(var i=0; i<nums.length;i++){
//         for(var j= i+1; j<nums.length; j++)
//             if (nums[i]+nums[j]==target){
//                 return (i,j);
//             }
//             else{
//                 return (-1,-1);
//             }
//     }
// };
// numbers=[3,4,6,0,10]
// value= 10
// console.log(twoSum(numbers,value));

// var pairs =0;
// function sockMerchant(ar) {
//     for(var i =0; i<ar.length; i++){
//         for(var j = i+1; j<ar.length-1; j++){
//             if(ar[i]===ar[j]){
//                 pairs = pairs +1;
//                 ar.splice(i,1);// remove item from array
//             }
//         }
//     }
//     console.log(pairs);
//     console.log(ar);
// };


// // var number_socks = 10
// sock_color = [1,1,2,2,3,5]
// // sock_color = [1,4,3,5,4,1,3,5,1,3]
// sockMerchant(sock_color);

// class Solution {
//     /**
//      * @param {TreeNode} root
//      * @return {number[][]}
//      */
//     dfs(root, level,result){
//         if(root === null){
//             return;
//         }
//         if(level >= result.length){
//             var arr =[];
//             result.push(arr);
//         }
//             result[level].push(root.value);
//     }
    
//     zigzagTraversal(root) {
    
//     }  
// }


// let r = /";;4. ;) 08 785$/$:$$:$:9/:/-.962$3"$
// let numbers = /[0-9]/g;
// let result = str.match(numbers);
// console.log(result);

// console.log('Izayah');
    
//     for(let i =0; i< ar.length; i++){
//         for(let j = 0; j< ar -1 ; j ++)
//         if (ar[i]===b[j]){
//             ar.slice(i,1);
            
//         } 
//     console.log(ar);

// // let r = /\w+@\w+\.(net|com|org)
// let s = 'unicorns and stars' //string
// //let r = /star/; //regular expression
// let r = /[a-z]+/g;

// console.log(r.test(s)); //
// console.log(s.match(r));// gives what was matched
// //g for global, i for case sensitive, returns and array

//regular phone expression
//3 digits followed by a dash or . and 4 digits
// var r = /\d{6}[-.]\d{4}/g; 

//Input: ";;4. ;) 08 785$/$:$$:$:9/:/-.962$3"
//Output: "(408) 785-9962"

// let reg = /[0-9]/g; //reg exp
// let str = ";;4. ;) 08 785$/$:$$:$:9/:/-.962$3"; 
// let digits = str.match(reg); //return the array of reg matches

// //console.log(digits);

// const phone = arr => {
//     arr = arr.join('');
//     return '(' + arr.substring(0,3) + ')' 
//         + arr.substring(3, 6)
//         + '-'
//         + arr.substring(6,10);
//   };
// console.log(phone(digits));



/* Hackerrank Cloud*/
clouds = [0, 0, 0, 0, 1, 0]
clouds2 = [0, 0, 1, 0, 0, 1, 0]
function jumpingOnClouds(c) {
    let jumps = 0;
    for(let i = 0; i<c.length-1;){
          if( c[i]==c[i+1] && c[i+2]==0){
              jumps +=1;
              i = i+2;
          }
          else if(c[i]==c[i+1] && c[i+2]==1){
              jumps +=1;
              i = i+1;
          }
          else{
              jumps +=1;
              i = i+2;
          }
        }
    return jumps;
}
console.log(jumpingOnClouds(clouds));
console.log(jumpingOnClouds(clouds2));
