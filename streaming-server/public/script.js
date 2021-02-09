//get a reference to socket
const socket = io('/');
var mypeer = new Peer(undefined, {
    host: '/',
    port: '4001'
})

// note that the username will be extraced from the redis data
socket.emit('join_room', 'mosobhy', room_id);

// listen to the broadcasted event
// the username in this function comes from the serevr (and its the same as above)
// this will be execured whnen a new user join this room on server
socket.on('user_connected', username => {
    console.log('user ' + username + ' has been connected successfully');
})
