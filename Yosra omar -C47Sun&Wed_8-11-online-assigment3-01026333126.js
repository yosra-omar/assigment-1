// // part 1 :question 1
// const fs=require("fs");

// const readfile=fs.createReadStream("big.txt","utf-8");
// readfile.on("data",(chunk)=>{
//     console.log(chunk);
// });

// readfile.on ("end",()=>{
//     console.log("end file");
// });

// readfile.on("error",(err)=>{
//     console.log(err);
    
// })

// // question 2


// question 3
// const { log } = require("console");
// const fs=require("fs");
// const { pipeline } = require("stream");
// const readfile= fs.createReadStream("sourse.txt");
// const writefile =fs.createWriteStream("dest.txt.gz");
// const zlib=require("zlib");
// const lib= zlib.createGzip();

// readfile.on("data",(chunk)=>{
//     console.log(chunk);
// })


// pipeline(readfile,lib,writefile, (err)=>{
//     if(err)
//    console.log(err);
// });



// part 2 CRUD :question 1


// const fs = require("fs");
// const path = require("path");
// const http = require("http");

// const readFile = () => {
//     return JSON.parse(
// fs.readFileSync(path.resolve("./users.json"), { encoding: "utf-8" })
//     );
// };

// const writeFile = (data) => {
//  fs.writeFileSync( path.resolve("./users.json"),
//    JSON.stringify(data, null, 2), { encoding: "utf-8" }
//     );
// };            

//  res.writeHead(200, {"Content-Type": "application/json"});
// });

// const server = http.createServer((req, res) => {
//    let {url,method}=req;
//     if (url === "/user" && method === "POST") {

//   let data = "";
// req.on("data", (input) => {
//       data += input;
//         });
//  req.on("end", () => {
//      const newUser = JSON.parse(data);
//     const users = readFile();

//      const exitemail = users.find(
//        user => user.email === newUser.email
//           );

//  if (exitemail) {
//   res.writeHead(400, {"Content-Type": "application/json" });
//      return res.end(JSON.stringify({message: "Email exists" }));
//  }
//   newUser.id = users.length + 1;
//   users.push(newUser);
//  writeFile(users);
//  res.writeHead(200, { "Content-Type": "application/json"});
//     res.end(JSON.stringify({ message: "User added successfully" }));
//         });
//     }
// });

// server.listen(3000, () => {
//     console.log("Server running");
// });


//question 2

const server = http.createServer((req, res) => {
   let {url,method}=req;
    if (method === "PATCH" && url.startsWith("/user/")) {
     const id = url.split("/")[2];

 let data = "";

 req.on("data", (input) => {
   data += input;
  });

 req.on("end", () => {
   const updatedData = JSON.parse(data);

 const users = readFile();
    const user = users.find(
     user => user.id == id
 );

 if (!user) {
   res.writeHead(404, {"Content-Type": "application/json"});
      res.end(JSON.stringify({ message: "User not found" })
    );
 }
 if (updatedData.name) {
   user.name = updatedData.name;
            }
if (updatedData.age) {
    user.age = updatedData.age;
            }
if (updatedData.email) {
     user.email = updatedData.email;
 }

 writeFile(users);
 res.writeHead(200, {"Content-Type": "application/json"})
    res.end(JSON.stringify({ message: "updated successfully"})
);
 });
    }
});

server.listen(3000, () => {
    console.log("Server running");
});


//question 3



const server = http.createServer((req, res) => {

    let { url, method } = req;

if (method === "DELETE" && url.startsWith("/user/")) {
   let  id = url.split("/")[2];

const users = readFile(); 
const user = users.find(
     user => user.id == id
 );
        if (!user) {
res.writeHead(404, {"Content-Type": "application/json" });
   return res.end(
      JSON.stringify({message: "User not found"})
            );
        }
 const updateUser = users.filter(
     user => user.id != id
);
writeFile(updateUser);

 res.writeHead(200, { "Content-Type": "application/json"});
    res.end(
       JSON.stringify({message: "User deleted successfully"})
);
}
});

server.listen(3000,()=>{
    console.log("server runing")
});


//question 4

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    let { url, method } = req;

    if (method === "GET" && url === "/user") {
const users = readFile();
res.writeHead(200, {"Content-Type": "application/json"});
  res.end(
  JSON.stringify(users)
        );
    }

});

server.listen(3000,()=>{
    console.log("server runing")
});
                        

//question 5

if (url.startsWith("/user-by-id/") && method === "GET") {

    const id = url.split("/")[2];

 const user = users.find(
    user => user.id == id
    );

if (!user) {
return res.end(
    JSON.stringify({message: "User not found" })
);
  }

  res.end(JSON.stringify(user));
}

server.listen(3000,()=>{
    console.log("server runing")
});
                        

// part 3  :question 1
//1. What is the Node.js Event Loop?
// it allows Node.js to handle asynchronous operations using a single thread.
//  It executes callbacks when the Call Stack becomes empty.

// 2. What is Libuv and What Role Does It Play in Node.js?
// Libuv is  provides:
// Event Loop
// Asynchronous I/O operations
// Thread Pool
// It helps Node.js perform tasks like file reading and networking without blocking the main thread.

// 3. How Does Node.js Handle Asynchronous Operations Under the Hood?
// Node.js encounters an async operation.
// The task is delegated to Libuv.
// Libuv executes it in the background.
// When completed, the callback is placed in the Event Queue.
// The Event Loop moves it to the Call Stack for execution.


// 4. What is the Difference Between the Call Stack, Event Queue, and Event Loop in Node.js?
// Call Stack: Executes function calls.
// Event Queue: Stores completed async callbacks waiting to run.
// Event Loop: Monitors the Call Stack and moves callbacks from the Event Queue to the Call Stack when it is empty.


// 5. What is the Node.js Thread Pool and How to Set the Thread Pool Size?
// The Thread Pool is a group of worker threads managed by Libuv to handle expensive tasks 
// like file system operations,
//  cryptography, and DNS lookups.

// 6. How Does Node.js Handle Blocking and Non-Blocking Code Execution?
// Blocking Code: Stops the execution of other code until the operation finishes.
// Non-Blocking Code: Allows other code to continue running while the operation executes in the background.

