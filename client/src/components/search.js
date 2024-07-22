import React, { useState, useEffect, useRef } from 'react';
import SearchListItem from './searchListItem.js';

function Search({ tanks, guesses, onTankSelect }){
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTanks, setFilteredTanks] = useState(tanks);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const tankRefs = useRef([]);

    useEffect(() => {
        setFilteredTanks(
            tanks.filter(tank => {
                return (searchTerm != '' 
                && tank.name.toLowerCase().includes(searchTerm.toLowerCase())
                && !guesses.includes(tank)
                );
            })
        )
        setSelectedIndex(0);
    }, [searchTerm, tanks])

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

export default Search;