// Function define
// function Print(){   
//     console.log("Pratyush");
// }

// Function Use
// Print();

// function Add(){
//     for(let i=1;i<=100;i++){
//         console.log(i);
//     }
// }
// Add();

// function PrintNumber(num){
//     console.log("Printing No:", num);
// }
// PrintNumber(10);

// function GetAverage(num1,num2){
//     let avg=(num1+num2)/2;
//     console.log("Average:",avg);
// }
// GetAverage(3,7)

// function getSum(a,b,c){
//     let sum=a+b+c;
//     return sum;
// }
// let ans=getSum(1,2,3);
// console.log(ans);

// function getName(firstname, lastname){
//     let fullName=firstname +" "+ lastname;
//     return fullName;
    // Unreachable Statement
    // let a=10;
    // let b=20;
    // let sum=a+b;
    // console.log(sum);
// }
// let fullName=getName("Pratyush","Kumar");
// console.log("FullName:",fullName);

// function getMultiplication(a,b){
//     return a*b;
// }
// console.log(getMultiplication(2,10));

// let a=function(a,b){
//     return a*b;
// }
// let ans=a(2,20);
// console.log(ans);

// let squarenumber=function(num){
//     let ans=num**2;
//     return ans;
// }
// let ans=squarenumber(5);
// console.log(ans);

// function getExp(x,y){
//     let ans=x**y;
//     return ans;
// }
// console.log(getExp(2,10));

// let getExp=function(x,y){
//     let ans=x**y;
//     return ans;
// }
// console.log(getExp(2,10));


let getExp=(x,y) => {   // Arrow Function 
    let ans=x**y;       // => Arrow Function ans his symbol
    return ans;
}
console.log(getExp(2,10));