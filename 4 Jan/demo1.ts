/////////////////////////////////////////anonymous function

// let temp=function(){
//     console.log("first Anonymous function is called");
// }
// temp();
// let temp1=function(a:number,b:number){
//     console.log("second Anonymous function is called "+(a+b));
// }
// temp1(5,5);

// let temp2=function(a:number,b:number){
//     return(a+b);
// }
// let res=temp2(5,5);
// console.log(res);

// let temp3=function(){
//     return(50+50);
// }
// let res1=temp3();
// console.log(res1);

///////////////////////////////////////////////////////fat arrow


// let temp=()=>{
//     console.log("first fat arrow is called");
// }
// temp();

// let temp1=(a:number,b:number)=>{
//     console.log("second fat arrow function is called "+(a+b));
// }
// temp1(5,5);

// let temp2=(a:number,b:number)=>{
//     return(a+b);
// }
// let res=temp2(5,5);
// console.log(res);

// let temp3=()=>{
//     return(50+50);
// }
// let res1=temp3();
// console.log(res1);


/////////////////////////////////////optional parameter function



// function add2(a:number,b?:number){
//     console.log(" value of a is "+(a));
//     console.log(" value of b is "+(b));
//     console.log(" Addition "+(a+b!));
// }
// add2(5);

// function add3(a?:number,b?:number){
//     console.log(" value of a is "+(a));
//     console.log(" value of b is "+(b));
//     console.log(" Addition "+(a+b!));
// }
// add3();

/////////////////////////////////////default parameter function

function add2(a:number,b:number=10){
    console.log(" value of a is "+(a));
    console.log(" value of b is "+(b));
    console.log(" Addition "+(a+b));
}
add2(5);

function add3(a:number,b:number=10){
    console.log(" value of a is "+(a));
    console.log(" value of b is "+(b));
    console.log(" Addition "+(a+b));
}
add3(5,5);




