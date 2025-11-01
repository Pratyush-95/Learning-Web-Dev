// let obj = {
//     age: 12,
//     weight: 78,
//     height:180
// };
// console.log(obj);

// obj.color = "white";
// console.log(obj);



// let src = {
//     age: 12,
//     weight: 78,
//     height:180
// };

// let dest= {...src};  // create the clone of src 

// src.age=90;

// console.log("src :",src);
// console.log("dest:",dest);



// let src = {
//     age: 12,
//     weight: 78,
//     height:180
// };

// let src2={
//     value:101,
//     name:"Pratyush Kumar"
// }

// let dest=Object.assign({},src,src2);  // create the clone of src 
 
// console.log("src :",src);
// console.log("dest:",dest);



let src = {
    age: 12,
    weight: 78,
    height:180
};

let dest={};

// cloning using iteration
for(let key in src){
    // console.log(key);
    let newKey = key;
    let newValue = src[key];
    // insert newKey and value in dest and create a clone
    dest[newKey] = newValue;
}

// src.age=50;

console.log("src :",src);
console.log("dest:",dest);