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
            className="relative max-w-sm mx-auto mt-4"
            >
                <div className="flex items-center max-w-sm mx-auto">
                    <input
                        type="text"
                        placeholder="Type tank name..."
                        value={searchTerm}
                        onChange={handleInputChange}
                        className="block w-full p-4 s-10 text-sm bg-wblack bg-opacity-50 placeholder-gray-100
                        text-white rounded focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span class="sr-only">Search</span>
                    </button>

                </div>
                
                <div 
                id="dropdown-search" 
                className="absolute w-full overflow-y-scroll 
                z-10 mt-2 rounded bg-wgray bg-opacity-80 max-h-60"
                >
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
            </div>
        )
    }
}

export default Search;