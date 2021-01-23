// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends employee {
    constructor(name, id, email, getSchool) {
        super(name, id, email) 
            this.getSchool= getSchool;
       
    }
    getRole() {
        return "Intern";
    }
    
    getSchool() {
        return this.getSchool;
    }

}
const employee = new Intern();