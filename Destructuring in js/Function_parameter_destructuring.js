// object destructuring
const profile = {
    name : 'code',
    language : 'javascript'
}

const {name, language,
} = profile;




// Function parameter destructuring
function introduce({ name }) {
    console.log(`My name is ${name}`);
};

introduce(profile);

function intro({ language }) {
    console.log(`My name is ${language}`);
};

intro(profile);