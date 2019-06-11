# Apuntes uso de Debug en Express

referencias:
- https://expressjs.com/es/guide/debugging.html
- https://www.npmjs.com/package/debug

1. Instalar el módulo en la aplicación
2. Establecer variable:
   - Valores:
     - ``DEBUG=express`` Controla los direccionamientos
     - ``DEBUG=application`` Controla los direccionamientos
   - En Linux    ``$ DEBUG=express:* node src/index.js``
   - En windows  ``set DEBUG=express:* & node src/index.js`` 