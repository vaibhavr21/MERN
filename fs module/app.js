// var a = 6
// console.log(a)


// const fs = require("fs");

// to write a file and create 
// fs.writeFileSync("test1.txt"," by there");

// to append a text in test1.txt file 
// fs.appendFileSync("test1.txt"," by there");

// const fs = require("fs");

// to read test1.txt file 
// let data  = fs.readFileSync("./test1.txt");  default it will print in binary
// console.log(data.toString());  this will print in string 

// another method 

// let data  = fs.readFileSync("./test1.txt", {encoding: "utf-8"});
// console.log(data);



// to delete the File
// fs.unlinkSync("./test1.txt") this will delete test1.txt file







// const fs = require("fs");

// fs.writeFile("test2.txt", "hi there", function (error){
//     if(!error){
//         console.log("File successfully created");
//     }
// });


// fs.appendFile("test2.txt", " by there", function (error){
//     if(!error){
//         console.log("File successfully created");
//     }
// });


// fs.readFile("./test3.txt",function(error, data){
//     if(!error){
//       console.log(data.toString());
//     }
// });


// fs.readFile("./test3.txt", {encoding: "utf-8"} ,function(error, data){
//     if(!error){
//       console.log(data);
//     }
// });


// fs.unlink("./test3.txt",function(error){
//     if(!error){
//         console.log("File deleted successfully.");
//     }
// });








