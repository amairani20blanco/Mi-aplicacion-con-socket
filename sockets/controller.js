


const socketController = (socket) => {
    
    console.log('Cliente conectado', socket.id );

    socket.on('disconnect', () => {
        
        console.log('Cliente desconectado', socket.id );
    });
//RECIBIENDO Y REGRESANDO, escuchando el evento enviar-mensaje
    socket.on('enviar-mensaje', ( payload, callback ) => {
        
        const id = 123456789;
        
        socket.broadcast.emit('enviar-mensaje', payload );
        
        socket.emit('enviar-mensaje', payload);
        callback( id );
    })
// estamos leyendo cuando el usuario da click y es cuando se envia un mensaje para despues emitir el mensaje 
//a todos los usuarios
}



module.exports = {
    socketController
}

