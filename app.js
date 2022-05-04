require('dotenv').config();
//estamos requieriendo de la libreria "dotenv" solo la parte de configuracion
const Server = require('./models/server');
// estamos requiriendo la clase de server

const server = new Server();



server.listen();
// estamos escuchando al servidor corriendo 

