





// Event Module part 2

//app.js file

// const events = require("events");

// const {EventEmitter} = events;

// const eventEmitter = new EventEmitter();

// //register an event
// eventEmitter.on("event-1", function(param1, value, name){
//     console.log("Hi there!");
//     console.log(param1);
//     console.log(value);
//     console.log(name);
// });

// module.exports = eventEmitter;







const events = require("events");
const fs = require("fs");

const {EventEmitter} = events;

const eventEmitter = new EventEmitter();

//register an event
eventEmitter.on("event-1", function(content){
    fs.writeFile("test.txt", content, function(error){
        if(!error){
            console.log("File Created SuccessFully");
        }
    });

});

module.exports = eventEmitter;