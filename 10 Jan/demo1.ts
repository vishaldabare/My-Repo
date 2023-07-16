export class Myclass{

    public id:number;
    private fname:string;
    protected lname:string;

    constructor(id:number , fname:string , lname:string){
        this.id=id;
        this.fname=fname;
        this.lname=lname;

    }

    display(a:number , b:number){

        console.log(`

        Addition  :: ${a+b}
        
        `)
    }

}

let obj = new Myclass(1 , "vishal" , "dabare");
obj.display(10 , 10);
//obj.fname;
obj.id;
//obj.lname;

export let get:number=100;

export function substract(c:number , d:number){
    console.log(`
    Substraction :: ${c-d}
    `)
}