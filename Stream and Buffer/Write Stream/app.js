const fs = require("fs");

const readStream = fs.createReadStream("C:/Users/vkm/Desktop/MERN Stack/Stream and Buffer/Write Stream/data.txt");

const writeStream = fs.createWriteStream("output.txt");

readStream.on("data",function(buffer){
    writeStream.write(buffer);
});