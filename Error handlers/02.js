// Custum message error class 
// send limited information to the user/client

const express = require("express");
const CustomError = require("./02 ExpressError")
const app = express();

const checkToken = ("/api",(req, res, next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new CustomError(401,"ACCESS DENIED!");
});

app.get("/api", checkToken, (req, res)=>{
    res.send("data")
})

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
app.get("/err", (req, res) => {
    abc = abc;
});

app.use((err, req, res, next)=>{
   res.send(err);
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
})


// if we want go http://localhost:3000/api?token=wrongtoken
// then it will show to client custum status code and message

// if we go http://localhost:3000/api?token=giveaccess
// then it will show data