var path = require("path");
var express =require("express");
const http = require("http");
const socketIO = require("socket.io");
const app =express();
var server= http.createServer(app);
var io=socketIO(server);

var publiPath = path.join(__dirname, '../public')
const port =process.env.PORT || 2750;
// console.log(publicDir);

 // app.get(`/`, (req,res)=>{
 //   res.render (`${publicDir}`);
 // })
app.use (express.static(publiPath));
io.on("connect",(socket)=>{
  console.log('New user connected');
  socket.on("disconnect",()=>{
    console.log("User was disconnected!");
  })
});

server.listen(port, ()=>{
  console.log(`Your express server is running on ${port}`);
});
