// middleware ke pass options
// ya wo response send kare ya wo next function ko call kare

const express = require('express');
const app = express();

app.use((req, res)=>{
    console.log("Hi, i am middleware.")
    res.send("middleware finished.")
});

app.get("/",(req, res)=>{
    res.send("Hi, i am root.")
});

app.get("/random",(req, res)=>{
    res.send("Hi, i am random.")
});

app.listen(8080,()=>{
    console.log("Server is running on 8080.")
});


// it will show middleware finished 
// if you go http://localhost:8080/ 
// it will show middleware finished
// and if you go http://localhost:8080/random
// it will show middleware finished
// because you send response through middleware instead of passing next() function