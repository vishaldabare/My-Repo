let a:number[]=[1,2,3,4,5,6];
let b:string[]=["vishal" , "umang"];
let c:string[]=[];
let d:any[]=[1 , "vishal" , true];
let e=[1,2,4,5];
let f=[1,"umang" ];
f[2]="vishal";
let g=[];
let h:(number|string|boolean)[]=[1,2,3,"vishal","umang" ,true ,false];

// for(let i=0; i<a.length; i++){
//     console.log("the value of array is " + a[i]);
// }

//console.log(a);

// console.log("Display array using join method " + a.join("*"));
// console.log("Display array using join method " + a.join(" "));
// console.log("Display array using join method " + a.join());
// console.log("Display array using join method " + a.join("\n"));

// a.forEach((myvalue ,i)=>{
//     console.log("My value is " + myvalue+" index is "+ i)
// })

// a.forEach((myvalue ,j , arr)=>{
//     console.log(`My Value Is = ${myvalue} Index Is = ${j} Array is = ${arr}`)
// })


function display(...item:number[]){
    console.log(item);
}

display(1,2,3,4,5,6,7,8,9);

function display2(str:String , ...item:number[]){
    console.log(item+" "+ str);
}

display2("Vishal",1,2,3,4,5,6,7,8,9);