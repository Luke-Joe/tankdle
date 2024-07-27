import React, { useState, useEffect, useRef } from 'react';
import SearchListItem from './searchListItem.js';

function Search({ isSolved, tanks, guessResults, onTankSelect }){
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTanks, setFilteredTanks] = useState(tanks);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const tankRefs = useRef([]);

    useEffect(() => {
        if (searchTerm === '') {
            setFilteredTanks([]);
            return;
        }

        const normalize = str => str.toLowerCase().replace(/[\s-.()/]/g, '');
        const isMatch = (tank, term) => normalize(tank.name).includes(normalize(term));
        const guessedTankIds = guessResults.map(guess => guess.tank_id);
        const filteredTanks = tanks
            .filter(tank => !guessedTankIds.includes(tank.tank_id))
            .filter(tank => isMatch(tank, searchTerm))
            .sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                const term = searchTerm.toLowerCase();

                if (nameA.startsWith(term) && !nameB.startsWith(term)) {
                    return -1;
                } else if (!nameA.startsWith(term) && nameB.startsWith(term)) {
                    return 1;
                } else {
                    return nameA.localeCompare(nameB);
                }
            });
        
        setFilteredTanks(filteredTanks);
        setSelectedIndex(0);
    }, [searchTerm, tanks, guessResults])

    function handleInputChange(e) {
        setSearchTerm(e.target.value);
    }

    function handleTankSelect(tank) {
        onTankSelect(tank);
        setSearchTerm('');
    }

    function handleTankClick(tank) {
        handleTankSelect(tank);
    }

    function handleKeyDown(e) {
        if (filteredTanks.length === 0) return;

        const actions = {
            ArrowDown: function() {
                setSelectedIndex(function(prevIndex) {
                    return (prevIndex === null ? 0 : Math.min(filteredTanks.length - 1, prevIndex + 1));
                });
            },
            ArrowUp: function() {
                setSelectedIndex(function(prevIndex) {
                    return (prevIndex === null ? 0 : Math.min(0, prevIndex - 1));
                });
            },
            Enter: function() {
                handleTankSelect(filteredTanks[selectedIndex]);
            }
        };

        if (actions[e.key]) {
            actions[e.key]();
        }
    }

    if (!isSolved) { 
        return (
            <div
            tabIndex="0"
            onKeyDown={handleKeyDown}
            >
                <input
                    type="text"
                    placeholder="Type tank name..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <ul>
                    {filteredTanks.map((tank, index) => (
                        <SearchListItem 
                        key={tank.id}
                        tank={tank}
                        ref={el => tankRefs.current[index] = el}
                        isSelected={selectedIndex === index}
                        onClick={() => handleTankClick(tank)}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Search;