// const fs = require("fs");

// // let readStream = fs.createReadStream("../Stream and Buffer/data.txt");

// let readStream = fs.createReadStream("../Stream and Buffer/data.txt", {encoding: "utf-8"});



// // readStream.on("data",function(buffer){
// //     console.log(buffer);

// readStream.on("data",function(buffer){
//     // console.log(buffer.toString());
//     console.log(buffer);

// });





const fs = require("fs");

let readStream = fs.createReadStream("../Stream and Buffer/data.txt");

let content = [];

readStream.on("data", function (buffer){
    content.push(buffer);
});

readStream.on("end", function(){
    let actualData = Buffer.concat(content).toString();
    console.log(actualData);
});