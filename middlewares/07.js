
// Now i can pass token middleware to multiple routes making a function checkToken

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

app.use((req, res)=>{
    res.status(404).send("Page not found!");
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
})

// if i go to http://localhost:3000/api?token=giveaccess
// it will return data
// if i go to http://localhost:3000/api?token=wrongtoken
// it will return ACCESS DENIED!