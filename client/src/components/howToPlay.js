import React, { useState } from 'react';
import Modal from './modal.js';
import Grid from './grid.js';
import { compareTanks } from '../utils/comparisons.js';

export default function HowToPlay() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const exampleSolutionTank = {
        "name": "IS",
        "nation": "ussr",
        "is_premium": false,
        "tier": 7,
        "images": {
            "small_icon": "http://api.worldoftanks.com/static/2.76.0/wot/encyclopedia/vehicle/small/ussr-R01_IS.png",
            "contour_icon": "http://api.worldoftanks.com/static/2.76.0/wot/encyclopedia/vehicle/contour/ussr-R01_IS.png",
            "big_icon": "http://api.worldoftanks.com/static/2.76.0/wot/encyclopedia/vehicle/ussr-R01_IS.png"
        },
        "type": "heavyTank",
        "tank_id": 513,
        "caliber": 122,
        "alpha": 390
    }

    const exampleGuessTank1 = {
        "name": "STG",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "images": {
            "small_icon": "http://api.worldoftanks.com/static/2.76.0/wot/encyclopedia/vehicle/small/ussr-R146_STG.png",
            "contour_icon": "http://api.worldoftanks.com/static/2.76.0/wot/encyclopedia/vehicle/contour/ussr-R146_STG.png",
            "big_icon": "http://api.worldoftanks.com/static/2.76.0/wot/encyclopedia/vehicle/ussr-R146_STG.png"
        },
        "type": "mediumTank",
        "tank_id": 47617,
        "caliber": 122,
        "alpha": 390
    }

    const exampleGuessTank2 = {
        "name": "KV-1S",
        "nation": "ussr",
        "is_premium": false,
        "tier": 6,
        "images": {
            "small_icon": "http://api.worldoftanks.com/static/2.76.0/wot/encyclopedia/vehicle/small/ussr-R13_KV-1s.png",
            "contour_icon": "http://api.worldoftanks.com/static/2.76.0/wot/encyclopedia/vehicle/contour/ussr-R13_KV-1s.png",
            "big_icon": "http://api.worldoftanks.com/static/2.76.0/wot/encyclopedia/vehicle/ussr-R13_KV-1s.png"
        },
        "type": "heavyTank",
        "tank_id": 18689,
        "caliber": 85,
        "alpha": 160
    }

    const exampleResult1 = [compareTanks(exampleGuessTank1, exampleSolutionTank)];
    const exampleResult2 = [compareTanks(exampleGuessTank2, exampleSolutionTank)];
    const exampleResult3 = [compareTanks(exampleSolutionTank, exampleSolutionTank)];

    return (
        <div>
            <a className="text-white hover:underline hover:text-white cursor-pointer" onClick={toggleModal}>How To Play</a>
            <Modal show={showModal} onClose={toggleModal}>
                <div id="howTo" className="justify-left text-left text-white text-base p-4">
                    <h2 className="text-wyellow font-bold text-2xl">HOW TO PLAY</h2>
                    <hr className="mb-2" />
                    <p>Guess today's World of Tanks vehicle. The vehicle changes every 24 hours.</p>
                    <br></br>
                    <p>Start the game by typing in the name of a tank into the search field. Click on any vehicle, or navigate through the list using arrow keys to submit a guess. </p>
                    <br></br>
                    <p>The properties of the guessed vehicle will be compared to those of the solution vehicle.</p>
                    <p><span className="text-wgreen">Green</span> indictes that the property is a match.</p>
                    <p><span className="text-gray-500">Grey</span> indicates that the property is not a match.</p>
                    <p>An arrow indicates whether the property in the solution is higher(⬆️) or lower(⬇️) than that of the guess.</p>
                    <br></br>
                    <h3>Properties</h3>
                    <h4>Tier:</h4>
                    <p><span className="text-orange-500">Possible Values</span>: I-X</p>
                    <h4>Nation:</h4>
                    <p><span className="text-orange-500">Possible Values</span>: China, Czech, France, Germany, Italy, Japan, Poland, Sweden, UK, USA, USSR</p>
                    <h4>Class:</h4>
                    <p><span className="text-orange-500">Possible Values</span>: Light Tank, Medium Tank, Heavy Tank, Tank Destroyer, SPG</p>
                    <h4>Type:</h4>
                    <p>How the vehicle can be obtained. The premium type covers both premium and reward vehicles. The tech tree type covers tech tree and collector vehicles. </p>
                    <p><span className="text-orange-500">Possible Values</span>: Premium, Tech Tree</p>

                    <h4>Alpha:</h4>
                    <p>The average alpha damage of the tanks top gun. In cases where a tank has multiple viable guns, the one with the higher credit cost is used. </p>
                    <p><span className="text-orange-500">Possible Values</span>: 8 - 1150</p>
                    <br></br>
                    <h3>Hints</h3>
                    <p>To help you find the correct vehicle, hints unlock after a fixed number of guesses. </p>
                    <p><span className="text-orange-500 font-semibold">Caliber</span>: Gives the caliber of the gun used by the tank in mm.</p>
                    <p><span className="text-orange-500 font-semibold">Icon</span>: Shows the contour icon of the tank.</p>
                    <p><span className="text-orange-500 font-semibold">Visual</span>: Shows the big icon of the tank.</p>
                    <br></br>
                    <h3>Example</h3>
                    <p>Let's look at an example game. Start with entering an arbitrary tank such as the STG and the following properties will appear</p>
                    <Grid guessResults={exampleResult1} solutionTank={exampleSolutionTank} />
                    <p>From this guess, we can see that the solution tank is going to be a tech tree tank from the USSR that is lower than tier 8, has 390 alpha, and is not a medium. </p>
                    <Grid guessResults={exampleResult2} solutionTank={exampleSolutionTank} />
                    <p>Hmm. Not quite, but now we also know that it's a heavy tank and it has to be at tier 7. If you were to enter the IS at this point, here's what would come up:</p>
                    <Grid guessResults={exampleResult3} solutionTank={exampleSolutionTank} />
                    <p>Congratulations, you've found the solution to the tutorial!</p>
                </div>
            </Modal>
        </div>
    )
}