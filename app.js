const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const newTeamArray = [];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { create } = require("domain");

function appMenu() {
    function createManager() {
        console.log("please build your Tream");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is your manager's name?"
                

            },
            {
                type: "input",
                name: "managerId",
                message: "What is your manager's id?",
                // validate user input here
            },
            {
                type: "input",
                name: "managerEmail",
                message: " What is the Managers emmail?",
                // validate user input here
                
                
            },
            {
                type: "input",
                name: "managersOfficeNumber",
                message: " What is your managers's office number?",
                // validate user input here ])
            }
            
        
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managersOfficeNumber);
            console.log(manager);
            newTeamArray.push(manager);
            
            addTeamMember()
        });
    }




    async function addTeamMember() {
        console.log(newTeamArray)
        inquirer.prompt([
            {
                type: "list",
                name: "employee",
                message: "Would you like to add team members?",
                choices: ["Engineer", "Intern", "Build Team"]

            }
        ]).then(answers => {
            if (answers.employee === 'Engineer') {
                EngineerQuestions();
            } else if (answers.employee === 'Intern') {
                InternQuestions();
            } else {
                buildTeam();
                // let data = render(teamArray);
                // console.log('OK Builing Team now.....')
                // fs.writeFile(outputPath, data, (err) => {
                //     if (err) throw err;
                //     console.log('Team Complete!');
                // }) 
        
            }
        })
 
    }  
        
                                


    function EngineerQuestions() {
        console.log("creating Engineer");
        
       
        inquirer.prompt([

            {
                type: "input",
                name: "engineerName",
                message: "What is your Engineer's name?"
            

            },
            {
                type: "input",
                name: "engineerId",
                message: "What is your Engineers's id?",
                // validate user input here
            },
            {
                type: "input",
                name: "engineerEmail",
                message: " What is the Engineer's email?",
                // validate user input here
            
            
            },
            {
                type: "input",
                name: "engineergitHubUser",
                message: " What is your Engineers GitHub?",
                // validate user input here 
       

            },

        ])
            
            .then(function (answers) {
                let engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineergitHubUser,);
                newTeamArray.push(engineer);
                addTeamMember()

            })
            .catch(function (err) {
                console.log(`Somthing went wrong!${err}`);
            });
    }    
         
        function InternQuestions() {
            console.log("congrats testing Intern");
            inquirer.prompt([

                {
                    type: "input",
                    name: "internName",
                    message: "What is your Intern's name?",
            

                },
                {
                    type: "input",
                    name: "internId",
                    message: "What is your Intern's id?",
                    // validate user input here
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: " What is the Interns's email?",
                    // validate user input here
            
            
                },
                {
                    type: "input",
                    name: "school",
                    message: " What school does your Intern attend?",
                    // validate user input here
            
                },
            ])
                .then(function (answers) {
                    let intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
                    newTeamArray.push(intern);
                    addTeamMember()
    
                })
                .catch(function (err) {
                    console.log(`Somthing went wrong!${err}`);
                });
        
        }
    
            
    
    
        
       



//  builds team, renders array but need to render HTML,
    function buildTeam() {
        console.log(newTeamArray);
            fs.writeFileSync(outputPath, render(newTeamArray),)
        }

createManager()
    
}
    
appMenu()
    

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided render function to work! 
