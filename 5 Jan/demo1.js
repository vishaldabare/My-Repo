var a = [1, 2, 3, 4, 5, 6];
var b = ["vishal", "umang"];
var c = [];
var d = [1, "vishal", true];
var e = [1, 2, 4, 5];
var f = [1, "umang"];
f[2] = "vishal";
var g = [];
var h = [1, 2, 3, "vishal", "umang", true, false];
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
function display() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log(item);
}
display(1, 2, 3, 4, 5, 6, 7, 8, 9);
function display2(str) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    console.log(item + " " + str);
}
display2("Vishal", 1, 2, 3, 4, 5, 6, 7, 8, 9);
