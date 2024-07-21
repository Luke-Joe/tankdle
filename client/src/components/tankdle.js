import React, { useState, useEffect } from 'react';
import { getSolutionTank, getTankList } from '../services/api.js';

const Game = () => {
    const [tanks, setTanks] = useState([]);
    const [solutionTank, setSolutionTank] = useState(null);
    const [guesses, setGuesses] = useState([]);

    useEffect(() => {
        console.log("here")
        const fetchTanks = async () => {
            try {
                const tankData = await getTankList();
                setTanks(tankData);
            } catch (error) {
                console.error('Error fetching tank list:', error);
            }

        }

        const fetchSolutiontank = async () => {
            try {
                const solTank = await getSolutionTank();
                setSolutionTank(solTank);
            } catch (error) {
                console.error('Error fetching solution tank:', error);
            }
        };

        fetchSolutiontank();
        fetchTanks();
    }, []); 

    if (!solutionTank) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{solutionTank.name}</h1>
        </div>
    );
}

export default Game;