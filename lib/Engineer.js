// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends employee {
    constructor(name, id, email, gitHubUser) {
        super(name, id, email)
        this.gitHubUser = gitHubUser;

    }
    getRole() {
        return "Engineer";

    }
    
    gitHubUser() {
        return this.gitHubUser;
    }
}   
const employee = new Engineer();