console.log("Welcome");
console.log('Welcome');
console.log(`Welcome`);

var a:number=10;
console.log(`the value of a is ${a}`);
console.log("the value of a is"+a);
console.log('the value of a is'+a);

var str!:String;
console.log("the value of str is " +str);
str="vishal";
console.log("the value of str is " +str);

var active:boolean=true;
console.log("the value of active is " +active);

var many:any;
many=10;
console.log("the value of many is " +many);
many="umang";
console.log("the value of many is " +many);
many=false;
console.log("the value of many is " +many);

var b=4.5;
b=40;

var c;
c=20;
c="vishal"
c=false
console.log("value of c is " + c);

var c1:any;
    // any,object,unknown
    // 1 angle bracket
        // used in typescript file
    // 2 as syntax
        // ts file as well as  html file 

      // 1 angle bracket
        var temp=(<string> c1);
        // temp.
        //(<string> c1).
        
      // 2 as syntax
      var temp2=(c1 as string);
    //   temp2.