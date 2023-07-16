export class Department{
    private jobrole:string;

    constructor(r:string){
        this.jobrole=r;
    }

    getJobrole():string{
        return this.jobrole;
    }

    setJobrole(jobrole:string){
        this.jobrole=jobrole
    }

}