import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


/*

  TODO:
  X. Use local storage to save guesses
  2. End the game when the solution is found
  X. Change colour depending on status of guess
  4. On startup, check if any saved guesses contains the solution
  5. Reset solution at 0000 PST
  6. Success box -> Timer, # attempts, 
  

  X. Link to API
  X. Create components for wordle style game

  - SEARCH ARROW KEY NAVIGATION A LITTLE BUGGED EDGE CASES
  - SEARCH REMOVE SPACES FROM ORIGINAL (E100)
  - SEARCH SHOULD PRIORITIZE TANKS THAT START WITH THE SEARCH TERM
  - WHY ARE SOME TANKS JUST MISSING? (IS-7)

  - UPDATE SEARCH TO REMOVE GIVEN GUESSRESULTS

  X. allow user to submit guesses
  2. handle guesses 
   X Add guess to guesses array
   X Remove tanks in guess array from filtered tanks
   X Guesses should be saved even if user refreshes page
   - Guesses should reset along with the solution tank
   - Display guesses in grid with the most recent guess at the top
  3. handle comparisons
   X Compare guess with solution tank
   X Display comparison results
   - Change state if daily is completed
*/