export function countOneShots(results) {
    let count = 0;
    for (let i = 0; i < results.length; i++) {
        if (results[i].attempts === 1) {
            count++;
        }
    }

    return count;
}

export function calculateStreaks(results) {
    if (results.length === 0) return { max: 0, current: 0 };

    let maxStreak = 0;
    let currStreak = 0;
    let prevDay = results[0].dayId;

    for (let i = 1; i < results.length; i++) {
        if (results[i].dayId === prevDay + 1) {
            currStreak++;
            maxStreak = Math.max(maxStreak, currStreak);
        } else {
            currStreak = 1;
        }
        prevDay = results[i].dayId;
    }

    return { max: maxStreak, current: currStreak };
}

export function calculateTotal(results) {
    if (results.length === 0) return 0;
    let prevDay = null;
    let count = 0;

    for (let i = 0; i < results.length; i++) {
        if (prevDay && results[i].dayId === prevDay) {
            continue;
        }

        prevDay = results[i].dayId;
        count++;
    }

    return count;
}

export function calculateAverageAttempts(results) {
    if (results.length === 0) return 0;

    let totalAttempts = 0;
    for (let i = 0; i < results.length; i++) {
        totalAttempts += results[i].attempts;
    }

    return totalAttempts / results.length;
}