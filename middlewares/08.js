// Handling errors in the middleware
// Express default error handler


// if any error occur on server side we simply present some error without exposing code


const express = require("express");
const app = express();

const checkToken = ("/api",(req, res, next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    res.send("ACCESS DENIED!");
});

app.get("/api", checkToken, (req, res)=>{
    res.send("api")
})
app.get("/api/data", checkToken, (req, res)=>{
    res.send("data")
})
app.get("/api/information", checkToken, (req, res)=>{
    res.send("Information")
})
app.get("/wrong",(req, res)=>{
    abc = abc;
    // if error occured express default handler --referenceError
})

app.use((req, res)=>{
    res.status(404).send("Page not found!");
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
})


// ----------------------------------------------------------------



// if we want to send custom error

const express = require("express");
const app = express();

const checkToken = ("/api",(req, res, next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new Error("ACCESS DENIED!");
});

app.get("/api", checkToken, (req, res)=>{
    res.send("api")
})
app.get("/api/data", checkToken, (req, res)=>{
    res.send("data")
})
app.get("/api/information", checkToken, (req, res)=>{
    res.send("Information")
})


app.use((req, res)=>{
    res.status(404).send("Page not found!");
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
})

