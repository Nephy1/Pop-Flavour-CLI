const chalk = require('chalk')

const arg = process.argv.slice(2)

const pop = arg[0]
const flavour = arg[1]
// Enter your  preferred soda brand and flavour.
// EXAMPLE: node app Coke Cherry || Orange Crush || Muggs Root-beer
// ERROR EXAMPLE : node app 8 7 || node app Coke 8 || node app 8 Pepsi || node app || node app coke


if (Number(pop) || Number(flavour)) {
  console.log(chalk.red('Invalid entry. Please enter your preferred soda brand and flavour.'))
} else {
  if (!pop && !flavour) {
    console.log(chalk.blue('Please enter your preferred soda brand and flavour.'))
    }  else if (!pop) {
      console.log('Please enter your preffered soda brand.')
    } else if (!flavour){
      console.log(chalk.blue('Please enter your preferred soda flavour.'))
    } else if (pop && flavour){
      console.log(chalk.green(`Well... ${pop} ${flavour}. Not a bad choice!`))
    } else {
      console.log(chalk.red('Invalid entry. Please enter your preffered soda brand and flavour'))
    }
  }

  




 