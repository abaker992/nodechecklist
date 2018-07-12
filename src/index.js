import numeral from 'numeral';
// this can put our style sheet in our web pack, web pack uses JS to inject our css 
//on to the page
import './index.css'
/*eslint-disable no-console*/

const courseValue = numeral(1000).format('$0,0.00');
// debugger; //triggers debug mode here we will see how source mapping will
					//make the debugging easier by showing our code in the terminal
console.log(`I woud pay ${courseValue} for this course`);
