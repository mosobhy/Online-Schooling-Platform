const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// configure the view engine to render handlebars templates
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');  // templating engine configured to handlebars templates

app.use(express.static('public'));


// this route will be reached from the django server having a room_id associated with
app.get('/:room_id', (req, res) => {

    // do all the work related to the extracing the room data here

    res.render('room', {room_id: req.params.room_id});
})

// handle the socket, and connect to it
// when the socket connected successfully
io.on('connection', (socket) => {
    // when some user tries to join a room, this event will be recieved and passed 
    // with it th username and the room_id
    socket.on('join_room', (username, room_id) => {
        console.log(username, room_id);
        // join this room 
        socket.join(room_id);

        // emit to all users that a user has been join this room
        socket.to(room_id).broadcast.emit('user_connected', username);

    })
})

server.listen(4000);