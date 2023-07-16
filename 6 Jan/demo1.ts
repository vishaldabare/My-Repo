// let a:number[]=[];
// a.push(1,2,3,4,5,6,7,8,9);
// console.log(a);
// a.pop();
// console.log(a);
// let temp=a.pop();
// console.log(temp);
// console.log(a);

//splice

// let b:number[]=[1,2,3,4,5,6,7,8,9];
// console.log(b);
// let temp=b.splice(1,0,500,100);
// console.log(b)

// b.splice(1,2);
// console.log(b);

// b.splice(2 , 3 , 500,100,200,3000);
// console.log(b);

//slice

let c:number[]=[1,2,3,4,5,6,7,8,9];
let temp=c.slice(2,c.length-3);
console.log(temp);
let temp1=c.slice(1);
console.log(temp1);
let temp2=c.slice();
console.log(temp2);

