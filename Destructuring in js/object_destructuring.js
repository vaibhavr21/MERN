
// object destructuring
const profile = {
    name : 'code',
    language : 'javascript'
}

const {name, language,
} = profile;

console.log(name);
console.log(language);



// object destructuring
const profile = {
    name : 'code',
    language : 'javascript'
}

const {name, language, java
} = profile;

console.log(name);
console.log(language);
console.log(java)   // undefined





// object destructuring
const profile = {
    name : 'code',
    language : 'javascript'
}

const {name, language,
} = profile;

console.log(name);
console.log(language);
// console.log(java)   // uncaught referemceError java is not defined