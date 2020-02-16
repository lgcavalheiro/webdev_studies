const schedule = require('node-schedule');

const job1 = schedule.scheduleJob('*/5 * * * * *', () => {
    console.log('Executing Job 1: ', new Date().getSeconds());
});

setTimeout(() => {
    job1.cancel();
    console.log('Cancelling job 1...')
}, 20000);

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(0, 5)]
rule.hour = 22
rule.second = 30

const job2 = schedule.scheduleJob(rule, () => {
    console.log('Executing Job 2: ', new Date().getSeconds());
})