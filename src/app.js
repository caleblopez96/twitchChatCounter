const client = new tmi.Client({
    connection: {
        secure: true,
        reconnect: true
    },
	channels: [ 'my_name' ] // enter channel name
});

client.connect();

let isCountActive = false;
let users = {};


client.on('message', (channel, tags, message, self) => {
	if(self) return;
    if(username === client.channels) {
        if(message === 'insert message here') {
            // do something based off message streamer wants to listen for
        }
    }
	console.log(`${tags['display-name']}: ${message}`);
});
