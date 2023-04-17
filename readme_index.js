const inquirer = require('inquirer');

const fs = require('fs');

const fileContent = ({title, description, future, access, usage, licence, contributions, ifTested})=>

`# Application Title

${title}.

## Application Description

Currently the application provides ${description}.

## Installation

The application is (intended to be) available ${access}.

## Usage

The application is intended for ${usage}. 


## License
${licence}

## Future
${future}

## How to contribute
${contributions}

## Test program
Consider if the test program is prepared? ${ifTested}`;

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the application title',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter the application description',
      },
      {
        type: 'input',
        name: 'future',
        message: 'The further development will see the application',
      }, 
      {
        type: 'input',
        name: 'access',
        message: 'How to access the application',
      }, 
      {
        type: 'input',
        name: 'usage',
        message: 'The application is intended ',
      },
      {
        type: 'list',
        name: 'licence',
        message: 'The licencing of further development is available under ',
        choices: ['GitHubPublicLicence', 'GitHubPrivateLicence'],
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'Contributors are invited to ',
      },
      {
        type: 'confirm',
        name: 'ifTested',
        message: 'Please confirm if the test program is developed',
        default: false,
      },
    ];

    inquirer.prompt(questions)
    .then((answers)=> {
        theFile = fileContent(answers);
    fs.writeFile("README_new.md", theFile, (err) =>
    { err ? console.log(err) : console.log('Success!')})
    });
