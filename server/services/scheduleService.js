import schedule from 'node-schedule';
import moment from 'moment-timezone';
import { updateSolutionTank } from '../models/tankModel.js';

export function scheduleDailySolution() {
    const timezone = 'America/Los_Angeles';
    const cronPattern = '0 0 0 * * *';
    const cronTest = '0 0 * * * *';

    schedule.scheduleJob(cronTest, {tz: timezone}, async function scheduledUpdate() {
        try {
            let soln = await updateSolutionTank();
            console.log("Updated solution tank at " + moment().tz(timezone).format("dddd, MMMM Do YYYY, h:mm:ss a"));
            console.log("New solution tank: " + soln.solutionTank.name);
        } catch (error) {
            console.error("Failed to update solution tank:", error);
        }
    })
}
