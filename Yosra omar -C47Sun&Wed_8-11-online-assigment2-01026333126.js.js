//question 1

function pathFile() {
    console.log({
        File: __filename,
        Dir: __dirname
    });
}

pathFile();

//question 2
const path=require("path");
function namefile( ) {
    console.log(path.basename("/user/files/report.pdf"));
}
namefile();
//question 3
const path = require('path');

function createPath(obj) {
    return path.format(obj);
}
console.log(
    createPath({
        dir: "/folder",
        name: "app",
        ext: ".js"
    })
);

//question 4
const path = require('path');

function createPath( ) {
console.log( path.extname('/docs/readme.md"'))
    };

createPath();
//question 5

const path = require('path');
const url="/home/app/main.js";
function createPath( ) {
console.log({
    Name: path.parse(url).name,
    ext: path.parse(url).ext
}
)
    };

createPath();


//question 6

const path =require("path");

function namefile() {
    console.log(path.isAbsolute("/home/user/file.txt"))
}
namefile();
//question 7

const path =require("path");

function namefile() {
    console.log(path.join("src","components", "App.js"))
}
namefile();
//question 8

const path =require("path");

function namefile() {
    console.log(path.resolve("./index.js"))
}
namefile();

//question 9

const path =require("path");

function namefile() {
    console.log(path.join("/folder1", "folder2/file.txt"))
}
namefile();

//question 10
const fs = require("fs");

function deleteFile() {
        fs.unlink("./file.txt",(err)=>{
           if(err){
            console.log(err);
           } 
            console.log("The file.txt is deleted.");
        })
       
    }

 deleteFile();

// question 11

const fs = require("fs");

function createFile() {
    try {
        fs.writeFileSync("./file.txt", "success");
        console.log("File Created");
    } catch (err) {
        console.log(err);
    }
}

createFile();

//question 12

const EventEmitter = require("events");

const event = new EventEmitter();
event.on("start", () => {
    console.log("Welcome event triggered!");
});
event.emit("start");

//question 13

const EventEmitter = require("events");

const event = new EventEmitter();
event.on("login", (username) => {
    console.log(`“User logged in:${username} `);
});
event.emit("login","Ahmed");


//question 14

const fs=require("fs");

try{
   const data= fs.readFileSync("./file.txt","utf-8")
      console.log(`the file content => ${data}`)
}catch(err){
   console.log(err)
}

//question 15
const fs=require("fs");

const data =fs.writeFile("./file.txt","Async save",(err)=>{
    if(err)
        console.log(err)

console.log("success");
});

//question 16

const fs=require("fs");

fs.exists("./file.txt",(exists)=>{
   
   console.log(exists);
}
);
//question 17
const os = require("os");

function SystemInfo() {
    console.log( {
        Platform: os.platform(),
        Arch: os.arch()
    });
}

SystemInfo();


