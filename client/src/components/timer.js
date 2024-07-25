import React, { useEffect } from 'react';

function Timer() {
    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft() {
        const now = new Date();
        const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 1);
        const timeToMidnight = nextMidnight - now;

        const hours = Math.floor((timeToMidnight % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeToMidnight % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeToMidnight % (1000 * 60)) / 1000);

        return { hours, minutes, seconds};
    }

    return (
        <div>
            <h2>Time until next reset:</h2>
            <p>
                {timeLeft.hours.toString().padStart(2, '0')}:
                {timeLeft.minutes.toString().padStart(2, '0')}:
                {timeLeft.seconds.toString().padStart(2, '0')}
            </p>
        </div>
    )
}

export default Timer;