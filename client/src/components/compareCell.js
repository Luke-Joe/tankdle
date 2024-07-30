import React from 'react';

export default function CompareCell({ guessAttribute }) {

    function tierToRoman(num) {
        switch(num) {
            case 1:
                return 'I';
            case 2:
                return 'II';
            case 3:
                return 'III';
            case 4:
                return 'IV';
            case 5:
                return 'V';
            case 6:
                return 'VI';
            case 7:
                return 'VII';
            case 8:
                return 'VIII';
            case 9:
                return 'IX';
            case 10:
                return 'X';
            default:
                return num;
        }
    }

    function mapNation() {
        let nations = {
            'usa': 'USA',
            'uk': 'UK',
            'france': 'France',
            'ussr': 'USSR',
            'germany': 'Germany',
            'china': 'China',
            'japan': 'Japan',
            'czech': 'Czech',
            'sweden': 'Sweden',
            'poland': 'Poland',
            'italy': 'Italy'
        };

        let nation = nations[guessAttribute.value] || guessAttribute.value;
        let flag = '/flags/' + guessAttribute.value + '.svg';

        return (
            <div className="flex flex-col items-center">
                <img src={flag} alt={nation} className="w-9 h-6 opacity-75" />
                <span className="text-sm font-medium">{nation}</span>
            </div>
        )
    }

    function mapClasses() {
        let classes = {
            'lightTank': 'Light Tank',
            'mediumTank': 'Medium Tank',
            'heavyTank': 'Heavy Tank',
            'AT-SPG': 'Tank Destroyer',
            'SPG': 'SPG'
        };

        let classIcon = '/classes/' + guessAttribute.value + '.png';

        return (
            <div className="flex flex-col items-center">
                <img src={classIcon} alt={guessAttribute.value} className="opacity-75" />
                <span className="text-sm font-medium">{classes[guessAttribute.value] || guessAttribute.value}</span>
            </div>
        )
    }

    function mapType() {
        return <span>{guessAttribute.value}</span>;
    }
    
    function substituteValues() {
        console.log(guessAttribute);
        switch(guessAttribute.attribute) {
            case 'tier':
                return tierToRoman(guessAttribute.value);
            case 'caliber':
                return `${guessAttribute.value}mm`;
            case 'nation':
                return mapNation();
            case 'type':
                return mapType();
            case 'class':
                return mapClasses();
            default:
                return guessAttribute.value;
        }
    }

    return (
    <div className={`${guessAttribute.comparison} compareCell`}>
        {substituteValues()}
    </div>
    )
}