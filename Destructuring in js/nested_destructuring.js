
// Nested destructuring]
const student = {
    nem : 'code',
    scores: {
        math : 80,
        science : 86
    }
};

const {
    nem,
    scores:{math,science}
} = student;

console.log(nem)
console.log(math)



const student = {
    nem : 'code',
    scores: {
        math : 80,
        science : 86
    }
};

const {
    nem,
    scores:{math,science}
} = student;

console.log(nem)
console.log(math)
console.log(science)