//////////////////////////////////////////////////////

// var result = undefined;

// function add(a, b, sum) {
//     sum = a + b;
// }

// // Simulate a server API call
// setTimeout(()=> add(2, 3, result), 1000);

// console.log("Sychronous result", result);
// console.log("Running some code here");

// function addWithCallback(a, b, callback) {
//     const sum = a + b;
//     callback(sum);
// }

// function printResult(value) {
//     console.log("Callback result:", value);
// }

// setTimeout(() => addWithCallback(5, 7, printResult), 0);
// setTimeout(() => addWithCallback(2, 3, printResult), 0);

// console.log("Running some more code");



//////////////////////////////////////////////////////


const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
    
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

getPosts();

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);



//////////////////////////////////////////////////////
