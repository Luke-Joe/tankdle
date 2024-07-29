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

    X. WOT dataset filter out FL/Event tanks
     X Event tanks are not stored by default :)
     X price gold == null && price credit == null <- doesnt work, too many eliminated
     X ** name ends in FL, CL = removed **

    Xa. Figure out how to use the highest caliber gun for each tank
     X Grab the configuration with the highest cost
     X Grab the vehicle characteristics with that profile_id
     X Retrieve the gun caliber and alpha damage, storing it in the tank object

    2. Create additional modes (WOT 1-5, WOT 6-10, GUESS LARGE ICON)\
     x Create datasets for each mode (1-5, 6-10)
     x Create solution tank for each mode
     X Update client side to use datasets as parameter in call to game component
     - buttons / nav bar to switch between modes
     3. yassify
    4. Create a hint system
     - hint 1: alpha damage
     - hint 2: small tank icon
     - hint 3: large tank icon
    X. Create a stats page
    6. Use cryptography to hide solution tank in api response


    TODO (Yassify):
     - Game select page
     - Clicking logo should link to game select page
     X Hide dropdown search is user clicks out of input
     - Update stats page
     - Update what is displayed in the grid
     - Hint system button displays
     - Grid should be square
       - how does grid behave in mobile
     - animation should only play when thing is added
     
    BUGS
    1. random "guess is undefined" - occurred after resetting tank solution without proper refresh
    2. round average attempts to 2 decimal places
    3. Dropdown search should hide if user clicks out of input
    4. Localstorage should auto refresh if soluionTank has changed

    IDEA
    1. Instead of Arrows indictaing direction, use XVM values to indicate how close the guess is to the solution

    SCHEDULER COMPONENTS
     - App.js -> schedules page + guess storage refresh
     - timer.js -> provides visual timer until next refresh
     - scheduleService.js -> schedules solution tank update
   */