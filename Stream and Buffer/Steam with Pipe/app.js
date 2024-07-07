const fs = require("fs");

const readStream = fs.createReadStream("C:/Users/vkm/Desktop/MERN Stack/Stream and Buffer/Steam with Pipe/data.txt");

const writeStream = fs.createWriteStream("output.txt");

readStream.pipe(writeStream);