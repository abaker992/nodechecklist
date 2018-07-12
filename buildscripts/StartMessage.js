
 //becuase we are using babel-node on prestart and babel is saying using latest ES we can 
 //use import instaed of require
 //this is a good way to force standardization acrross the code 
 import chalk  from'chalk';
console.log(chalk.green("starting app in dev mode.."))//eslint-disable-line no-console
