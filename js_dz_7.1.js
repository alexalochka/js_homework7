let alice = "Won232derful, Joyful, Happiness, Time, Homework, Task, Apple, bigH546t4orse, korona, vegetable";
let pattern = /[B-Zb-z0-9]{6,}/g;
console.log(alice.match(pattern))

// let alice = "Wonderful, Joyful, Happiness, Time, Task, Apple, mamamamam, korona"
// let pattern = /[^Aa]{6,}/g;
// console.log(alice.match(pattern))

// let str = "Won232derful, Joyful, Happiness, Time, Homework, Task, Apple, bigH546t4orse, korona, vegetable";
// let pattern2 = /\b[^Aa\s]{6,}\b/g;
// console.log(str.match(pattern2));