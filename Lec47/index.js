// class Human{
//     // properties
//     age=13; // Public
//     #weight=34; // Using # this variable is private  not using the outside of class
//     height=180;

//     // Behaviour
//     walking(){
//         console.log("I am Wakling",this.#weight);
//     }

//     running(){
//         console.log("I am Running");
//     }

//     get fetchWeight(){
//         return this.#weight;
//     }

//     set modifyWeight(val){
//         this.#weight=val;
//     }
// }

// let obj=new Human();
// // console.log(obj.#weight);
// console.log(obj.age);

// obj.walking();


// class Man{
//     // Properties
//     age; // public
//     #wt=25; // Private
//     ht=125;

//     constructor(newAge,newHeight,newWeight){
//         this.age=newAge;
//         this.#wt=newWeight;
//         this.ht=newHeight;
//     }

//     //Behaviour
//     walking(){
//         console.log("I am walking",this.#wt);
//     }

//     running(){
//         console.log("I am running");
//     }

//     get fetchWeight(){
//         return this.#wt;
//     }

//     set modifyWeight(val){
//         this.#wt=val;
//     }
// }

// let obj=new Man(50,190,101);
// console.log(obj.fetchWeight);

// obj.walking();


// function sayName(myName="Ankit"){  // default value Ankit
//     console.log("My name is:",myName);
// }
// sayName();


// function myName(fName="Pratyush", lName=fName.toUpperCase()){
//     console.log("My name is:", fName," ", lName);
// }
// myName();


// function solve(value={age:15,weight:78,height:180}){
//     console.log("Hello Sir",value);
// }
// solve();


// function getAge(){
//     return 190;
// }


// function utility(name="Pratyush",age=getAge()){
//     console.log(name," ",age);
// }
// utility()


// function getAge(){
//     return 190;
// }


// function utility(name,age){
//     console.log(name," ",age);
// }
// utility()


function getAge(){
    return 190;
}


function utility(name,age){
    console.log(name," ",age);
}
utility("Pratyush", 20);