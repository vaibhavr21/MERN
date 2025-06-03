// Activity
// Create an admin route & send an error with a 403 status code.




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

app.get("/admin",(req, res)=>{
    throw new CustomError(403,"You are not allowed to access this route!");
})

app.use((err, req, res, next)=>{
   let {status=500, message="some error occured!"} = err;
   res.status(status).send(message);
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
})