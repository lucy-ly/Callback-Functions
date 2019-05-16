function addWithPromise(a, b) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (!a || !b) {
                reject("This function needs two numbers as parameters")
            }
            resolve(a + b)
        }, 1000)
    })
}

// Using promise with .then
addWithPromise(2, 3)
    .then(result => {
        console.log("Using promise with .then", result)
    })
    .catch(err => console.log(err))
// Using promise with async and await   
async function getResult() {
    try {
        const result = await addWithPromise(2)
        console.log("Using promise with async and await:", result);
    }
    catch (err) {
        console.log(err)
    }
}

getResult()



// EXAMPLE 2

// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1
//     if (a == 2) {
//         resolve('Success')
//     }
//     else {
//         reject('Failed')
//     }
// })

// p.then((message) => {
//     console.log('This is in the then ' + message)
// }).catch((message) => {
//     console.log('This is in the catch ' + message)

// })





// EXAMPLE 3

/* global promise */

// var result = undefined;

// function add(a, b, sum) {
//     sum = a + b;
// }

// // Simulate a server API call
// setTimeout(() => add(2, 3, result), 1000);

// console.log("Sychronous result", result);
// console.log("Running some code here");

// function addWithPromise(a, b, resolve) {
//     const sum = a + b;
//     promise(sum);
// }

// function printResult(value) {
//     console.log("Promise result:", value);
// }

// setTimeout(() => addWithPromise(5, 7, printResult), 0);
// setTimeout(() => addWithPromise(2, 3, printResult), 0);

// console.log("Running some more code");
