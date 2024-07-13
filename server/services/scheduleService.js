import schedule from 'node-schedule';
import moment from 'moment-timezone';
import { updateSolutionTank } from '../models/tankModel.js';

export function scheduleDailySolution() {
    const nextDayStart = moment().tz("America/Los_Angeles").startOf("day").add(1, "day").toDate();
    const cronTest = '0 0 0 * * *';

    schedule.scheduleJob(nextDayStart, async function scheduledUpdate() {
        let soln = await updateSolutionTank();
        console.log("Updated solution tank at " + moment().tz("America/Los_Angeles").format("dddd, MMMM Do YYYY, h:mm:ss a"));
        console.log("New solution tank: " + soln.name);
        
        // Schedule the next update
        const nextDayStart = moment.tz('America/Los_Angeles').startOf('day').add(1, "day").toDate();
        schedule.scheduleJob(nextDayStart, scheduledUpdate);
    })
}
