// compile time error
// Syantax error
// console.log(1;

// Runtime error
// Reference error
//console.log(x);


// try{
//     console.log("try block start here");
//     // error-> reference error
//     console.log(x);
//     console.log("try block ends here");

//     //a

//     //b
// }
// catch(error){
//     // catch block define karta hai ki error ke saath kya karna hai
//     // retry logic
//     // fall back mechanism
//     //logging
//     //custom error
//     console.log("I am inside the catch block");
//     console.log("Your error is here:",error);
// }
// finally{
//     console.log("I will run every time, as i am finally block");
// }



// let's create a custom error
// try{
//     //Reference error
//     // console.log(x);

//     let errorCode=100;
// }
// catch(error){
//     throw new Error("Bhai pahle declare kar do phir print karna");
// }


let errorCode=100;
if(errorCode==100){
    throw new Error("Invalid Json");
}