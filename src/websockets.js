module.exports = (io) => {
  
  const messages = [{                
    name: 'Info:',
    message: 'Aquí van los mensajes',
  }];

  io.on('connection', (socket) => {
    console.log('cliente conectado id:', socket.id);


    // Enviando mensajes
    io.emit('messages', messages);

    socket.on('new-message', (data) => {
      messages.push(data);
      io.sockets.emit('messages', messages);
    });

  });
};
