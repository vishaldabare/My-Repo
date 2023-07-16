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
var c = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var temp = c.slice(2, c.length - 3);
console.log(temp);
var temp1 = c.slice(1);
console.log(temp1);
var temp2 = c.slice();
console.log(temp2);
