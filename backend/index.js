/*

Preprocessing
1. Grab data from WG API
2. Cache it in local storage (JSON) ?
3. Select a random vehicle to use as solution 

 - Solution:
 - Past guesses: 
 - Current guess:

Game
1. User searches for vehicle 
2. Navigate through dropdown menu to select
 - User presses enter to submit their guess
 - can use arrows to navigate menu
 - typing will filter results
3. Checking submissions
 - Each guess is checked against the solution
 - Parameters: nation, name, tier, class, is_premium, caliber
 - Parameters are assigned a colour given whether or not it is correct
 - Each guess is added to the list of past guesses and displayed underneath input
4. Game ends when the user guesses the correct vehicle

Hints
1. After n guesses, they get a hint on the starting letter of the solution vehicle
2. After m guesses, they get a partial image of the solution vehicle

*/