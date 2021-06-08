const path = require("path");
const http = require("http");
const express = require("express");
const sockerIo = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = sockerIo(server);

app.use(express.static(path.join(__dirname, "public")));

// To run when client is connected
io.on('connection', socket =>{
    console.log('on socket connection');
})

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
