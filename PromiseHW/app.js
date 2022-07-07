let promise1_status = false;
let promise2_status = false;
let promise3_status = false;

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        promise1_status = true;
        resolve();
    }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        promise2_status = true;
        resolve();
    }, 10000);
});

const promise3 = new Promise((resolve, reject) => { // Reject.
    setTimeout(() => {
        reject();
    }, 3000);
}).catch(err => {
    promise3_status = true;
})

const INTERVAL_CHECK = 1000;
const interval = setInterval(() => {
    promise1_status ? console.log("FILE NUMBER 1 IS DONE UPLOADING!") : console.log("FILE NUMBER 1 IS STILL UPLOADING!");
    promise2_status ? console.log("FILE NUMBER 2 IS DONE UPLOADING!") : console.log("FILE NUMBER 2 IS STILL UPLOADING!");
    promise2_status ? console.log("FILE NUMBER 3 IS REJECTED!") : console.log("FILE NUMBER 3 IS STILL UPLOADING!");
}, INTERVAL_CHECK)
