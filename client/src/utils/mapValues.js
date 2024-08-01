function tierToRoman(num) {
    let roman = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
        10: 'X'
    };

    return <span className='font-medium text-l'>{roman[num]}</span>
}

function mapNation(guessAttribute) {
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

function mapClasses(guessAttribute) {
    let classes = {
        'lightTank': 'Light Tank',
        'mediumTank': 'Medium Tank',
        'heavyTank': 'Heavy Tank',
        'AT-SPG': 'Tank Destroyer',
        'SPG': 'Clicker'
    };

    let classIcon = '/classes/' + guessAttribute.value + '.png';

    return (
        <div className="flex flex-col items-center">
            <img src={classIcon} alt={guessAttribute.value} className="opacity-75" />
            <span className="text-sm font-medium">{classes[guessAttribute.value] || guessAttribute.value}</span>
        </div>
    )
}

function mapType(guessAttribute) {
    return <span>{guessAttribute.value}</span>;
}

export default function substituteValues(guessAttribute) {
    switch (guessAttribute.attribute) {
        case 'tier':
            return tierToRoman(guessAttribute.value);
        case 'alpha':
            return <div className="text-sm font-medium">{guessAttribute.value}</div>;
        case 'nation':
            return mapNation(guessAttribute);
        case 'type':
            return mapType(guessAttribute);
        case 'class':
            return mapClasses(guessAttribute);
        default:
            return guessAttribute.value;
    }
}