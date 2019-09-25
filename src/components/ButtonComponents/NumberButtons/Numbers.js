import React from "react";
import {numbers} from '../../../data.js';
import {NumberButton} from './NumberButton.js'

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

  // STEP 2 - add the imported data to state

  export const Numbers = (props) => {
  
  const [numberState, setNumberState] = React.useState(numbers);
  console.log(numberState);

  const numberButtons = numberState.map(number => (
    <NumberButton number1 = {number} 
    key = {number}/>
   ));

  return (
    <div className = "numbersBox">
      {numberButtons}
    </div>
      );
    };
