import './index.css'; // Webpack parse CSS then inject style sheet onto the page
import numeral from 'numeral'; // library for formating number

const courseValue = numeral(1000).format('$0,0.00');
// debugger;
console.log(`I would pay ${courseValue} for this awsome course!`); // eslint-disable-line no-console
