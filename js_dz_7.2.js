var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];


const regex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@(gmail\.com|yahoo\.com)$/;

const validDomain = arr.filter(item => regex.test(item.email));

console.log(validDomain);