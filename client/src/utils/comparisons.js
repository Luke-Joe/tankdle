
export function compareTanks(guess, solution) {
    const result = {
        name: guess.name,
        tank_id: guess.tank_id,
        images: guess.images,
        tier: {
            value: guess.tier,
            comparison: compareTier(guess, solution),
            attribute: 'tier'
        },
        nation: {
            value: guess.nation,
            comparison: compareNation(guess, solution),
            attribute: 'nation'
        },
        class: {
            value: guess.type,
            comparison: compareClass(guess, solution),
            attribute: 'class'
        },
        type: {
            value: setPremiumType(guess.is_premium),
            comparison: compareType(guess, solution),
            attribute: 'type'
        },
        caliber: {
            value: guess.caliber,
            comparison: compareGunCaliber(guess, solution),
            attribute: 'caliber'
        },
    };

    return result;
}

function setPremiumType(is_premium) {
    return is_premium ? 'Premium' : 'Tech Tree';
}

/*
Comparison results are colour coded:
 - green: correct
 - blue: guess is lower than solution
 - yellow: guess is higher than solution
 - red: incorrect
*/
function compareTier(guess, solution) {
    if (guess.tier === solution.tier) {
        return 'green';
    } else if (guess.tier < solution.tier) {
        return 'blue';
    } else {
        return 'yellow';
    }
}

function compareGunCaliber(guess, solution) {
    const guessCal = guess.caliber;
    const solCal = solution.caliber;

    console.log(guessCal);
    console.log(solCal);
    
    if (guessCal === solCal) {
        return 'green';
    } else if (guessCal < solCal) {
        return 'blue';
    } else {
        return 'yellow';
    }
}

function compareClass(guess, solution) {
    return (guess.type === solution.type) ? 'green' : 'red';
}

function compareNation(guess, solution) {
    return (guess.nation === solution.nation) ? 'green' : 'red';
}

function compareType(guess, solution) {
    return (guess.is_premium === solution.is_premium) ? 'green' : 'red';
}
