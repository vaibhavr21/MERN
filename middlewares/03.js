// next()

const express = require("express");
const app = express();


app.use((req, res, next)=>{
    console.log("Hi i am 1st middleware.");
    next();
});

app.use((req, res, next)=>{
    console.log("this is 2nd middleware.");
    next();
});

app.get("/",(req, res)=>{
    res.send("this is a root.");
});

app.get("/random",(req, res)=>{
    res.send("this is random.");
});

app.listen(3000,()=>{
    console.log("server is runnning on 3000.");
});


//when i started the server
// then i go to http://localhost:3000/
// it will show "this is a root."
// in console server is runnning on 3000.
// Hi i am 1st middleware.
// this is 2nd middleware.


// when i go to http://localhost:3000/random
// it will show "this is random."
// in console server is runnning on 3000.
// Hi i am 1st middleware.
// this is 2nd middleware.
// Hi i am 1st middleware.
// this is 2nd middleware.


// when i go to http://localhost:3000/anything
// it will show "Cannot GET /anything"
// in console server is runnning on 3000.
// Hi i am 1st middleware.
// this is 2nd middleware.
// Hi i am 1st middleware.
// this is 2nd middleware.
// Hi i am 1st middleware.
// this is 2nd middleware.
// in this middleware is running it doesn't matter what route you go i havent defined any route for /anything but still it will run the middleware







// app.use((req, res, next)=>{
//     console.log("Hi i am 1st middleware.");
//     next();
//     console.log("this is after next() function in 1st middleware.");
// });



// if you write console.log("this is after next() function in 1nd middleware.");
// it will also run after the next() function is called
// and it will show in console
// this is not a right way to write some code after next() function
// so that if you write code mistakenly after next() function dev using return next() function 
// so that it will not run the code after next() function