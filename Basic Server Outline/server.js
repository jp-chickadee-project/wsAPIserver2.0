const WebSocket = require('ws');
const express = require('express');
const http = require('http');
const controller = require('./basic/controller')
const ws = new WebSocket.Server({ port: 8080 });
const server = new controller(ws);
const app = express();
let s = http.createServer(app);
s.listen(80);
app.get('/',(req,res)=>{
    server.updateClients('New Client')
    res.send('hello')
});
app.post('/bird',(req,res)=>{
    res.send(200)
    console.log('hello')
});