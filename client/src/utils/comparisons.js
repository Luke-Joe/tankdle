
export function compareTier(guess, solution) {
    if (guess.tier === solution.tier) {
        return 'correct';
    } else if (guess.tier < solution.tier) {
        return 'higher';
    } else {
        return 'lower';
    }
}

export function compareGunCaliber(guess, solution) {
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

export function compareClass(guess, solution) {
    return (guess.type === solution.type) ? 'correct' : 'incorrect';
}

export function compareNation(guess, solution) {
    return (guess.nation === solution.nation) ? 'correct' : 'incorrect';
}

export function compareType(guess, solution) {
    return (guess.is_premium === solution.is_premium) ? 'correct' : 'incorrect';
}
