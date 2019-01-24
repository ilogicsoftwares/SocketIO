const express =require ('express');
const app = express();
const socket =require ("socket.io");





const server=app.listen("3000",()=>{
console.log("Server Started at port 3000");
});

const io= socket(server);
io.on("connection",(socket)=>{
    console.log("Alguien se conecto");
    socket.on("send",(data)=>{
      io.sockets.emit("BroadCastMenssage", data);
    });
     socket.on("Position",(position)=>{
      io.sockets.emit("ReceivePosition", position);
    });
    });