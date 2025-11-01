    //let obj= {
//     // name:"Pratyush"
//     // "Full Nmae":"Pratyush"
//     name:"Pratyush",
//     age:25,
//     weight:85,
//     height:"5fit 8inch",
//     greet:function(){
//         console.log("Hello");
//     }
// };
// for(let key in obj){
//     // console.log(key);
//     console.log(key," ",obj[key]);
//}

//  };
// console.log(obj);
// obj.greet();
// console.log(typeof(obj));

// let obj2=obj;


//creation of array
// let arr=[1,2,3,4,5];
// console.log(typeof(arr));

// let arr=['Pratyush',true,45];
// arr.push('Pratyush');
// arr.pop();
// arr.shift();
// arr.unshift('Ankit')
// arr.push(20);
// arr.push(40);
// arr.push(70);
// // console.log(arr.slice(2,4));
// // arr.splice(1,2,'Kumar');
// arr.splice(1,0,'Kumar');
// console.log(arr);

// let arr=[10,20,30];
// arr.map((number) => {
//     console.log(number);
//     // console.log(number+1);
    
// })

// let ans=arr.map((number) =>{
//     return number*number;
// })
// console.log(ans);

// let arr=[10,20,30];
// arr.map((number,index) => {
//     console.log(number,index);
    
// })

// let arr=[10,20,30,11,21,44,51];
// let ans=arr.filter((number) =>{
//     return number%2==0;
//     if(number%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
//})
//console.log(ans);

// let arr=[1,2,'Pratyush','Kunal',null];
// let ans=arr.filter((value) =>{
//     if(typeof(value)=='string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(ans);

// let arr=[1,2,'Pratyush','Kunal',null];
// let ans=arr.filter((value) =>{
//     if(typeof(value)=='number'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(ans);

// let arr=[10,20,30,40];
// let ans=arr.reduce((acc,curr)=>{
//     return acc+curr;
// },0)
// console.log(ans);\

// let arr=[9,1,7,4,2,8];
// arr.sort();
// console.log(arr);
// console.log(arr.indexOf(9));

// let arr=[10,20,30];
// let length=arr.length;
// console.log("Length:",length);
// for(let index=0;index<length;index++){
//     console.log(arr[index]);
// }

// arr.forEach((value,index) =>{
//     console.log("Number:",index, "Index:",index);
// })


// let arr=[10,20,30,40];
// for(let value of arr){
//     console.log(value);
// }

// let fullname="Pratyush";
// for(let val of fullname){
//     console.log(val);
// }

let arr=[10,20,30,40,50];
function getsum(arr){

    // First Logic

    // let length=arr.length;
    // let sum=0;
    // for(let index=0;index<length;index++){
    //     sum=sum+arr[index];
    // }
    // return sum;

    // Second Logic
    let sum=0;
    arr.forEach(element => {
        sum=sum+element;
    });
    return sum;
}
let total=getsum(arr);
console.log(total);
