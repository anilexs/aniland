// node server.js


const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

console.log("Serveur WebSocket démarré sur ws://localhost:8080");

wss.on('connection', (ws) => {
    console.log('Client connecté !');
    ws.send('Bienvenue sur le serveur WebSocket !');
});

