# ExpressJS
Express es un framework minimalista que facilita la creación de un servidor con note.
## Inicio de proyecto
## Creacion de un proyecto
## Generador de estructura básica con express



## Configuración
________________________________________________________________________
Con el método ``app.set()`` se especifica [las variables](http://expressjs.com/es/4x/api.html#app.settings.table) de configuración de *Express*.

``` js
app.set('appName','mi servidor');        // Se obtiene con app.get('name')
app.set('views', __dirname + '/public'); // Diretorio de vistas (archivos html, pug, etc...).
app.set('view engine',pug');            // Especifica el gestor de plantillas.
```


## Direccionmiento
________________________________________________________________________
Son métodos que indican al servidor que ofrecer a cada direccion del servidor. Utiliza los **métodos html** *get, put, push...*  
``app.METHOD(PATH, (req, res)=>{} )`` .  

*Ejemplo básico*.  
``` js
app.get('/', (request, response) => {
  res.send('Hello World!');
});
```
  
## Middlewares
________________________________________________________________________
Los middleware son funciones que tienen acceso al objeto de solicitud (*req*), al objeto de respuesta (*res*) y a la siguiente función de middleware en el ciclo de solicitud/respuestas de la aplicación, normalmente con una variable denominada (*next*) que reciben los argumentos *req*, *res*.   
Son funciones que se activan con una dirección web y que se ejecutan en cadena (De arriba a abajo).  
Su principla ventaja es que se pueden ir pasando la cabecera y cuerpo *HTTP* modificada

``app.all(PATH, (req, res)=>{},next() )``  
Selecciona para todas las rutas que empiezan por *PATH* una acción previa.  



*ejemplo básico*.  
Devuelve a pantalla cada petición.
``` js
app.use((req, res)=>{
    console.log('request url: ' + req.url);
});
```

#### Referencias
https://community.4geeks.co/es/entendiendo-la-funcion-middleware-de-express-js/  

## Plantillas
________________________________________________________________________
Los motores de plantillas permiten utilizar eficazmente fragmentos *html* que forman la página que se va a presentar. Esto lo hace añadiendo funcionalidades al *html*.  

**Motores de vistas**:
- **EJS** sintaxis muy similar a *html*.
- **PUG** sintaxis simplificada.

*ejemplo básico*.  
Con el directorio *./public* configurado como directorio de vistas y *ejs* como motor de plantillas. El método ``app.render()`` devuelve de la siguiente forma una página index.js. 
``` js
app.get('/', (request, response) => {
  res.render('index.ejs');
});
```
## Subaplicaciones (Express.Router)
________________________________________________________________________
Express es capaz de crear manejadores de rutas modulables (encadenables) que realizan funciones consecutivas a las que se da paso con el método ``next()``. Aunque no se especificase este método debe de ponerse igualmente porque si no el server se detiene.

*routes.js*
``` js
const app = require(express);
const route = app.Route();

route.get('/', (request, response) => {
  res.render('index.ejs');
  return next(); // Si no se pusiera esto el servidor se detendría
});

route.get('*', (request, response) => {
  res.sens('Página inexistente');
  return next();
});

module.exports = route;
```
*index.js*
``` js 
const routes = require('./routes')
const routesApi = require('./routes-api')
app.use(routes);
app.use('/api', routesApi) // Otro directorio con las rutas Api
```

## Debugging
________________________________________________________________________

``` js
const debug = require('debug')('app:DBG-server'); 
```
Puede depurarse una aplicación genenrada con el [Generador de aplicaciones de Express](https://expressjs.com/es/starter/generator.html) usando el comando 

```js
// Linux
$ DEBUG=express:* node index.js

// Windows
> set DEBUG=express:* & node index.js
```  

También se puede personalizar el debugger importandolo directamente al script.

``` js
const app = require('./app');
const server = require('http').Server(app);
const debug = require('debug')('app:DBG-server');
// 'app:DBG-server' es el nombre que le damos al debugger
const port = process.env.PORT || 3000;

server.listen(port, () => {
 debug(`Server running on port: ${server.address().port}`);
});

```
  - Y en consola lo manejamos así
  ``` cmd
  // Linux
  $ DEBUG=express:* node index.js

  // Windows
  > set DEBUG=express:* & node index.js

  // Esto imprimirá todos los depuradores en la consola ten en cuenta // que ‘*’ significa lo que sea.
DEBUG=*

// Esto imprimirá todo menos ‘express:*’ en la consola.
DEBUG=*,-express:*

// Esto imprimirá todos los depuradores que empiecen con el prefijo // ‘app:’ y ‘express:’ en la consola.
DEBUG=app:*,express:*
  ```

  - Que nos devolverá
  ```
  app:server Server running on port: 3000 +9ms
  ```

Podemos introducir la depuración en un script en *package.json*
``` json
"scripts": {
   "start": "node server.js",
   "start:dev": "set DEBUG=* & set NODE_ENV=development & node server.js"
 },
```


#### Referencias
https://community.4geeks.co/es/depurando-tu-aplicacion-correctamente-con-express-js/  
[Curso completo en Youtube](https://www.youtube.com/watch?v=794Q71KVw1k&list=PLL0TiOXBeDag4aUucYMa6xo0z98IvCM3l&index=6 
)