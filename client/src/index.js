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
  1. Use local storage to save guesses
  2. Figure out a way to end the game
  3. Change colour depending on status of guess

  

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