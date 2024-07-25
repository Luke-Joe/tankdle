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
  X. End the game when the solution is found
   X Disable search bar
   X Display end screen
  X. Change colour depending on status of guess
  X. On startup, check if any saved guesses contains the solution
  X. Reset solution at 0000 PST
  X. Success box -> Timer, # attempts, 
  

  X. Link to API
  X. Create components for wordle style game

  - SEARCH ARROW KEY NAVIGATION A LITTLE BUGGED EDGE CASES
  X SEARCH REMOVE SPACES FROM ORIGINAL (E100)
  X SEARCH SHOULD PRIORITIZE TANKS THAT START WITH THE SEARCH TERM
  X WHY ARE SOME TANKS JUST MISSING? (IS-7) -> deal with it

  X UPDATE SEARCH TO REMOVE GIVEN GUESSRESULTS

  X. allow user to submit guesses
  X. handle guesses 
   X Add guess to guesses array
   X Remove tanks in guess array from filtered tanks
   X Guesses should be saved even if user refreshes page
   X Guesses should reset along with the solution tank
   X Display guesses in grid with the most recent guess at the top
  X. handle comparisons
   X Compare guess with solution tank
   X Display comparison results
   X Change state if daily is completed


  STAT STORAGE:
   X Number of solves (total)
   X Average number of attempts
   X Streak
   X Max streak
   X One shots


   X. Create a timer component
   X. Save past solutions
   X. API to retrieve most recent solution

   BACKLOG
    X. Save stats to local storage
    1. Create additional modes (WOT 1-5, WOT 6-10, GUESS ICON, WOTB 1-5, WOTB 6-10)
    2. WOT dataset filter out FL/Event tanks
    2a. Figure out how to use the highest caliber gun for each tank
    3. yassify
    4. Create a hint system
    X. Create a stats page
    6. Use cryptography to hide solution tank in api response


    BUGS
    1. random "guess is undefined" - occurred after resetting tank solution without proper refresh
   */