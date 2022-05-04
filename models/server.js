const express = require('express');
const cors = require('cors');
//Constante
const { socketController } = require('../sockets/controller');

class Server {

    constructor() {
        //lo que une todas las partes
        this.app    = express();
        //propiedad que almacena la libreria express
        this.port   = process.env.PORT;
        //la propiedad "port" es donde se localiza
        this.server = require('http').createServer( this.app );
        //el this.server requiere de el "http" y crea el servidor express
        this.io    = require('socket.io')( this.server );
        // "this.io" esta requeriendo de la libreria "socket.io" y lo aplicara en server

        this.paths = {};
        //arreglo vacio

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        // Sockets
        this.sockets();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {
        
        // this.app.use( this.paths.auth, require('../routes/auth'));
        
    }

    sockets() {

        this.io.on('connection', socketController );

    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;