
// var values = [1,2,3,4,5];
// // var sum = values.reduce((a,b)=>a+b);
// // console.log(sum);
// // values.forEach(arraysum);
// var total = 0;

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
//                 console.log(i,j);
//             }
//             else{
//             console.log("-1,-1");
//             }
//     }
// };
// numbers=[3,4,6,0,10]
// value= 10
// twoSum(numbers,value);

var pairs =0;
function sockMerchant(ar) {
    for(var i =0; i<ar.length; i++){
        for(var j = i+1; j<ar.length-1; j++){
            if(ar[i]===ar[j]){
                pairs = pairs +1;
                // console.log(i,j);
                ar.splice(i,1);
            }
        }
    }
    console.log(pairs);
    console.log(ar);
};


// var number_socks = 10
sock_color = [1,1,2,2,3,5]
// sock_color = [1,4,3,5,4,1,3,5,1,3]
sockMerchant(sock_color);
