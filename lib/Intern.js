// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee {
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
// exports as module to be used elsewhere
module.exports = Intern;