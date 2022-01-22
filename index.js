const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([{
            type: 'input',
            name: 'title',
            message: 'Enter title',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What is your favorite hobby?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage information',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Credit any contributors',
        },
        {
            type: 'input',
            name: 'test',
            message: 'whatever tests are',
        },
        {
            type: 'list',
            name: 'license',
            message: 'whatever tests are',
            choices: [{
                    name: "MIT license",
                    value: "MIT"
                },
                {
                    name: "Apache License 2.0",
                    value: "Apache"
                },
                {
                    name: 'BSD 3-Clause "New" or "Revised" license',
                    value: "BSD3"
                },
                {
                    name: "GNU General Public License (GPL)",
                    value: "GPL"
                },
            ],
        },
    ])

    .then(({
            license
        }) => {
            // Create a license string
            let badge;
            switch (license) {
                case "MIT":
                    badge =
                        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                    break;
                case "Apache":
                    badge =
                        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                    break;
                case "BSD3":
                    badge =
                        "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
                    break;
                case "GPL":
                    badge =
                        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
                    break;

                default:
                    throw new Error(`Invalid license ${license}`);
            }

            .then((answers) => {
                const htmlPageContent = generateHTML(answers);

                fs.writeFile('index.html', htmlPageContent, (err) =>
                    err ? console.log(err) : console.log('Successfully created index.html!')
                );
            });
            //create template literal
            //insert variables into write file
            //write file