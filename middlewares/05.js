// middleware for specific route
// if i write http://localhost:3000/random/something
// middleware will run but i haven't defined any route for /random/something


const express = require("express");
const app = express();

app.use("/random", (req, res, next)=>{
    console.log("I am middleware for /random route.");
    next();
})

app.get("/", (req, res) => {
    res.send("This is the root route.");
});

app.get("/random", (req, res) => {
    res.send("This is the random route.");
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
})


// -------------------------------------------------------------------------



// now i create another middleware for page not found 
// now if i go http://localhost:3000/random/something it will say page not found!
// now if i go http://localhost:3000/about it will say page not found!

const express = require("express");
const app = express();

app.use("/random", (req, res, next)=>{
    console.log("I am middleware for /random route.");
    next();
});

app.get("/", (req, res) => {
    res.send("This is the root route.");
});

app.get("/random", (req, res) => {
    res.send("This is the random route.");
});

app.use((req, res)=>{
    res.status(404).send("Page not found!");
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
})