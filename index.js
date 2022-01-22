const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./template.js');

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
            message: 'Installation requirements?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage information',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Credit any contributors with links to their github pages',
        },
        {
            type: 'input',
            name: 'test',
            message: 'whatever tests are',
        },
        {
            type: 'input',
            name: 'features',
            message: 'What features do you have',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a license',
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
        {
            type: 'input',
            name: 'github',
            message: 'What is your github link?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ])
    .then(answers => {
            const test = template(answers);
            let badge;
            switch (answers.license) {
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
            fs.writeFile('README.md', test, (err) => 
                err ? console.error(err) : console.log('Generating README.md...')
            );
            });