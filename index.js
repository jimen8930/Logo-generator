// This includes packages needed for this application which are the file system, inquire package, and the pathway for the generate logo. 
const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require('./lib/shapes');

// Array of questions for user input
function promptUser() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo.',
      },
      {
          type: 'input',
          name: 'textColor',
          message: 'Pick a text color you will like for your logo.',
          
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Pick a shape for your logo.',
          choices: ["Triangle", "Circle", "Square"],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Pick a color for your shape.',
        },
    ])
    .then((answers) => {
      // Generate the logo
    const { shape, shapeColor, text, textColor } = answers;
// The logic using switch case
    let logo;
      switch (shape) {
        case 'Triangle':
          logo = new Triangle ();
          break;
          case 'Square':
            logo = new Square ();
            break;
            case 'Circle':
              logo = new Circle ();
              break;
              default:
                 console.log('Invlaid shape selection.');
                 return;
      }
      logo.setColor(shapeColor);
      logo.setText(text);
      logo.setTextColor(textColor);

      const svg = logo.render();
// This is the function to write the svg file for the logo.

      fs.writeFile('logo.svg', svg, (err) => {
        if (err) {
          console.error('Error saving the logo:', err);
        } else {
          console.log('Logo saved as logo.svg');
        }
      });
    });
  };
// This function is needed for the array of questions to be prompted
  promptUser();





