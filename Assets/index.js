// This includes packages needed for this application which are the file system, inquire package, and the pathway for the generate logo. 
const fs = require('fs');
const inquirer = require('inquirer');
const generateLogo = require('../generateLogo.js');
const { Triangle, Square, Circle } = require("./lib/shapes");

// Array of questions for user input
function promptUser() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three caharacters for your logo.',
      },
      {
          type: 'list',
          name: 'textColor',
          message: 'Pick a text color you will like for your logo.',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Pick a shape for your logo.',
        },
        {
          type: 'list',
          name: 'shapeColor',
          message: 'Pick a color for your shape.',
        },
    ])
    .then((answers) => {
      // Generate the logo
    const svg = generateLogo(answers.color, answers.shape, answers.text);

    })
  };


// This is the function to write the svg file for the logo.
fs.writeFile('logo.svg', svg, (err) => {
  if (err) {
    console.error('Error saving the logo:', err);
  } else {
    console.log('Logo saved as logo.svg');
  }
});



