const { json } = require('express');
const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const redis = require('redis');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// configure the redis client
const REDIS_PORT = process.env.PORT || 6379;
const redis_client = redis.createClient(REDIS_PORT);

// configure the view engine to render handlebars templates
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');  // templating engine configured to handlebars templates

app.use(express.static('public'));


// this route will be reached from the django server having a room_id associated with
app.get('/:room_id', (req, res) => {

    // restore all the data of this particular room
    redis_client.hgetall(req.params.room_id, function(err, response) {
        if (response) {

            console.log(typeof(response));

            console.log(response)

            console.log(response.instructor)

            for(let item in response) {
                // item is going to access the key
                console.log('user is:', item, 'and his username: ',response[item])
            }

            // const data = JSON.parse(response);

            res.render('room', {
                room_id: req.params.room_id,
                data: data
            });

        } else {
            res.render('room', {error: 'No users in this Room'});
        }
    });
    
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