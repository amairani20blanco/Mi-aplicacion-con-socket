
// Referencias del HTML
const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');
const txtNombre = document.querySelector('#username');


const socket = io();



socket.on('connect', () => {
    // console.log('Conectado');

    lblOffline.style.display = 'none';
    lblOnline.style.display  = '';

});

socket.on('disconnect', () => {
    // console.log('Desconectado del servidor');

    lblOnline.style.display  = 'none';
    lblOffline.style.display = '';
});


socket.on('enviar-mensaje', (payload) => {
    const Mensaje = document.createElement ('p');
    const brinco = document.createElement("br");
    const textoMj = document.createTextNode(payload.nombre+": "+payload.mensaje);
    Mensaje.appendChild(textoMj);
    document.getElementById('mostrar').appendChild(textoMj);
    document.getElementById('mostrar').appendChild(brinco);
})


btnEnviar.addEventListener( 'click', () => {

    const mensaje = txtMensaje.value;
    const username= txtNombre.value;
    const payload = {
        nombre:username,
        mensaje,
    }
    
    socket.emit( 'enviar-mensaje', payload, ( id ) => {
        console.log('Desde el server', id );
    });

});