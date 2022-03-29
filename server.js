const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io =require("socket.io")(server);
const PORT = 3000;

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html"); //このindexhtmlの階層のパス
});                       //sendfileでindexhtmlをサーバーjsで受け取る                                        

io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("chat message", (msg) => {
        //console.log("message:" + msg);
        io.emit("chat message", msg); //クライアント側に送ったメッセージ
    });
});

server.listen(PORT, () => {
    console.log("listening on 3000");
});//表示されるはずの画面やオブジェクトが表示されていない場合何らかの変数名が間違っている
   //可能性が高い　正message　間違いmessages