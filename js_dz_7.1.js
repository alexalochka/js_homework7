let alice = "Won232derful, Joyful, Happiness, Time, Homework, Task, Apple, bigH546t4orse, korona, vegetable";
let pattern = /[B-Zb-z0-9]{6,}/g;
console.log(alice.match(pattern))



// // Ще хотіла зробити за методом виключення
// let alice = "Won232derful, Joyful, Happiness, Time, Homework, Task, Apple, bigH546t4orse, korona, vegetable"
// let pattern = /[^Aa\s]{6,}/g;
// console.log(alice.match(pattern))


// // Тут повне слово (в кінці вашого конспекту):
// let str = "Won232derful, Joyful, Happiness, Time, Homework, Task, Apple, bigH546t4orse, korona, vegetable";
// let pattern2 = /\b[^Aa\s]{6,}\b/g;
// console.log(str.match(pattern2));

//Єдине ще питання, якщо ми робимо виключекння [^] - ми вже в цих квадратних дужках не можемо вказати те, що НЕ потрібно виключати?