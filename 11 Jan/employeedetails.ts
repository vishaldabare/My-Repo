import { Employee } from "./employee";
import { Department } from "./department";
export class Employeedetails implements Employee{
fname: string;
lname: string;
salary: number;
dept:Department;

constructor (f:string , l: string , s:number , role:string){
this.fname=f;
this.lname=l;
this.salary=s;
this.dept=new Department(role)
}
display(){
    console.log(`
    First Name :: ${this.fname}
    Last Name :: ${this.lname}
    Salary    :: ${this.salary}
    Role      :: ${this.dept.getJobrole()}
    `)

}
}