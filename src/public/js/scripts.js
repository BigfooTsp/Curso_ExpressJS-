/** Para conectar el servidor y el cliente:
 * El servido importa el módulo y lo configura con el servidor. 
 * Ofrece en  el script "/socket.io/socket.io.js" que se importa en el html *main*
 * Esta importación ofrece la variable io en todo el html
 * El script personal instancia este objeto para conectar cliente y servidor.
 */

io();
let socket = io.connect('http://localhost:3000', {
  forceNew: true,
});


// recibiendo mensaje del servidor
socket.on('messages', (data) => {
  console.log('recibido message');
  render(data);
});


// Muestra el objeto recibido del servidor
// itera sobre los elementos del objeto recibido
function render(data) {
  console.log('data');
  let html = data.map(elem => `<div>
                                  <strong>${elem.name}</strong>:
                                  <em>${elem.message}</em>
                              </div>`).join(' '); // Separa los elemento por espacio (por defecto coma)

  document.getElementById('messages').innerHTML = html;
}



// Envía mensaje (objeto) al servidor
function addMessage(e) {
  let payload = {
    name: document.getElementById('form-chat').dataset.name,
    message: document.getElementById('message').value,
  };

  socket.emit('new-message', payload);
  return false; // salir de la función
}
