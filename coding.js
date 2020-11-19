
var values = [1,2,3,4,5];
// var sum = values.reduce((a,b)=>a+b);
// console.log(sum);
// values.forEach(arraysum);
var total = 0;

// function arraysum(ar){
//      var final =sum(ar);
// // for(var i=0; i<ar.length;i++ ){
// //      total = total+ar[i];
// // };
//      console.log(final);
// }
// arraysum(values);


var sum =0;
function simpleArraySum(ar) {
     ar.forEach(i=>{
         sum = sum + i;
     });
     console.log(sum);
 }
 simpleArraySum(values);