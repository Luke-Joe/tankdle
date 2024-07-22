
export function compareTanks(guess, solution) {
    const result = {
        name: guess.name,
        tank_id: guess.tank_id,
        tier: {
            value: guess.tier,
            comparison: compareTier(guess, solution)
        },
        nation: {
            value: guess.nation,
            comparison: compareNation(guess, solution)
        },
        class: {
            value: guess.type,
            comparison: compareClass(guess, solution)
        },
        caliber: {
            value: guess.default_profile.gun.caliber,
            comparison: compareGunCaliber(guess, solution)
        },
        type: {
            value: setPremiumType(guess.is_premium),
            comparison: compareType(guess, solution)},
    };

    return result;
}

function setPremiumType(is_premium) {
    return is_premium ? 'Premium/Collectors' : 'Standard';

}

function compareTier(guess, solution) {
    if (guess.tier === solution.tier) {
        return 'correct';
    } else if (guess.tier < solution.tier) {
        return 'higher';
    } else {
        return 'lower';
    }
}

function compareGunCaliber(guess, solution) {
    const guessCal = guess.default_profile.gun.caliber;
    const solCal = solution.default_profile.gun.caliber;

    console.log(guessCal);
    console.log(solCal);
    
    if (guessCal === solCal) {
        return 'correct';
    } else if (guessCal < solCal) {
        return 'higher';
    } else {
        return 'lower';
    }
}

function compareClass(guess, solution) {
    return (guess.type === solution.type) ? 'correct' : 'incorrect';
}

function compareNation(guess, solution) {
    return (guess.nation === solution.nation) ? 'correct' : 'incorrect';
}

function compareType(guess, solution) {
    return (guess.is_premium === solution.is_premium) ? 'correct' : 'incorrect';
}
