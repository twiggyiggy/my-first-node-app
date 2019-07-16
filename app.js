'use strict';

const chalk = require('chalk');
const getNames = require('./myModule') // primero paquetes, luego archivos

const students = [
  {name: 'Anna',
   age: 28},
  {name: 'Adri',
   age: 20}
];



console.log(chalk.blue(getNames(students)));

