// let fpara = document.getElementById('fpara');//iss method se hmm kisi bhi element ko uske id se access kar lenge
// fpara.textContent = "Hello Pratyush"// iss method se hmm (fpara id) ke content ko change kar skate hai
 
// This is First and best way to write hmm hamesha apne code me aise hi likh rahe honge
// function changeText(){
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Pratyush"
// }
// let fpara = document.getElementById('fpara');
// addEventListener and removeEventListener  dono ke andar same reference hona chiye tabhi work karga
// fpara.addEventListener('click',changeText); // iss method se hmm click karke content ko change kar skate hai 

// fpara.removeEventListener('click',changeText); // iss method se remove ho gya EventListener ab click karne par kuch change nhi hoga


// But dura way aur tarika
// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click',function(){
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Pratyush"
// });

// iss function ka use karke hamne ye dekha ki object event kaise kaam kar rha hai
// function changeText(event){
//     console.log(event);
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Pratyush"
// }
// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click',changeText);



// let anchorElement = document.getElementById('fanchor')

// // isse use karke jab bhi hmm click here par click karnge to vo kisi new link par nhi le jayega vo apne text ke andar kuch change kar lega
// anchorElement.addEventListener('click', function(event){
//     event.preventDefault();
//     anchorElement.textContent = "Click bhai";
// })


// First tarika aur bekar approach
// let para = document.querySelectorAll('p');

// for(let i=0;i<=para.length;i++){
//     let paras =para[i];
//     paras.addEventListener('click',function(){
//         alert("You have Clicked on para: " + (i+1)); // yha (i+1) isliye kiya ki vo 0-based index follow 
//         // kar rha hai aur First para ko 0th para bata rha tha but ab 1st para batayega
//     })
// }


// Dusra tarika
// let para=document.querySelectorAll('p');
// function alertPara(){
//     alert("You have Clicked on Para:" + event.target.textContent);
// }

// for(let i=0;i<para.length;i++){
//     let paras=para[i];
//     // console.log("eventListener added");
//     paras.addEventListener('click',alertPara)
// }


// Third tarika best optimal way 
function alertPara(){
    // iss if wale function ke code iss liye likha hai ki jab hmm keval span wale tag par click karnge 
    // to hi alert ayega Para wale content par click karne se alert nhi ayega isse ham conditional behaviour setup kahte hai
    if(event.target.nodeName == 'SPAN'){
        alert("You have Clicked on para: " + event.target.textContent);
    }
    // alert("You have Clicked on para: " + event.target.textContent);
}
let mydiv = document.getElementById('wrapper');
document.addEventListener('click', alertPara);
