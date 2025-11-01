// var age=20;  // This is Global Scope 
//               // Iss variable ko kahi bhi use kar sakte hai pure iss file ke andar



// Function Scope
// function Hello(){
//     var fullname="Pranjal"; //Function Scope Variable , Iss function ke body ke andar hi iss variable ko use kar skate hai
//     console.log("Hello",fullname);
// }
// // console.log(fullname); // Not run Because not access in out of function body
// Hello();


// Block scope
// {
//     var height=35; //iss variable ko kahi bhi access kar skate hai kyuki var variable block scope nhi hota hai
// }
// console.log(height);


// {
//     let age=50; // iss variablr ko function ke bahar access nhi kar skate kyu let variable block scope hota hai keval function ke andar hi acess kar skate hai

// }
// console.log(age);

// {
//     const age=67;
// }
// console.log(age);//iss variablr ko function ke bahar access nhi kar skate kyu const variable block scope hota hai keval function ke andar hi acess kar skate hai

console.log(marks);  // Line no 33 se le kar 35 tak Temporal Dead Zone hai iska matlab hmm waha tak ke variable ko acees nhi kar skate
console.log("Prattush");
console.log("Kumar");
let marks=50;
