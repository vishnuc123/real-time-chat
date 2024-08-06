const express = require('express');
const app = express();
const loginRouter = require('./router');
const http = require('http')
const server =http.createServer(app)
const socketio  = require('socket.io');
const formatMessage = require('./messages');
const { log } = require('console');
const io = socketio(server)



app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.set("view engine", 'ejs'); 
app.use(express.static('public'));
app.use('/route', loginRouter); 

app.get('/', (req, res) => {
    res.render('login.ejs');
});
app.get('/index', (req,res) => {
    console.log(req.body.username);
    
    res.render('index.ejs')

})

// adding name bot
const bot = 'chat cord bot'

io.on('connection' , socket => {
    console.log("new ws connection")
    socket.emit('message' ,formatMessage(bot,'welcome to chat'))

// broadcast
socket.broadcast.emit('message','a user connected to the chat')

socket.on('disconnect',() => {
    io.emit('message' , 'user disconnected from the chat')
})

socket.on('chatmessage',(message) =>{
    console.log(message)
    io.emit('message',formatMessage('user',message))
})
})



server.listen(4004, () => console.log("server is running http://localhost:4004"));
