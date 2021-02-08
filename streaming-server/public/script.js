//get a reference to socket
const socket = io('/');

socket.emit('join_room', 'mosobhy', 'this is a room id');

// listen to the broadcasted event
// the username in this function comes from the serevr (and its the same as above)
// this will be execured whnen a new user join this room on server
socket.on('user_connected', username => {
    console.log('user ' + username + ' has been connected successfully');
})