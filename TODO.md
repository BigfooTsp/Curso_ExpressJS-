## Lista de tareas v2.0.0
-----------------------------------------------------------------
Añadiendo sesión de usuario  

- [x] Añadiendo módulos necesarios
  - [x] express-passport
  - [x] passport
  - [x] passport-local
- [x] modificando modelo *Item* para usuario propietario
  - [x] Se añade atributo *user*
- [x] Añadiendo modelo *User* 
  - [x] archivo *models/User.js*
  - [x] La contraseña se codifica con bcryptjs
- [x] Añadiendo configuración de usuario
  - [x] archivo *server/passport.js*
- [x] Modificar */router/index* para incluir el controlador de User
- [x] Controlador para usuario
  - [x] Archivo: */controllers/users.js*
- [x] Modificando vistas
  - [x] Que los datos mostrados en las vistas sean coherentes con los nuevos datos del modelo user
    - [x] Quitar name y email de _item_ y las vistas
    - [x] sidebar
- [x] creando nuevas vistas
  - [x] formulario de registro (Página de inicio si no se está logueado)
  - [x] formulario de ingreso
#### Now
-----------
-----------  
- [x] Comportamientos según usuarios:
  - [x] Todos los usuarios pueden:
    - [x] visitar Home
    - [x] visitar About
  - [x] Solo los usuarios NO registrados pueden:
    - [x] ingresar
    - [x] registrar
  - [x] Solo los usuarios registrados pueden:
    - [x] crud de datos (vista incluida)
    - [x] vista de stats individuales
    - [x] logout

#### BUGS
- [x] BUG - No redireccióna a algunas páginas
  - ERROR: 
    - Se observa que al hacer login, no redirecciona a la página de crear _items_ dando los siguientes errores:
    - (node:16136) UnhandledPromiseRejectionWarning: CastError: Cast to ObjectId failed for value "create" at path "_id" for model "_Item_"
    - (node:16136) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
    - (node:16136) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
  - CAUSA:
    - El problema está relacionado con el orden de las rutas en index. Si se ponene después de las que necesitan parámetros desde req no se redirecciona.
  - SOLUCIÓN:
    - [x] 19-06-2019 - Se rectifica el orden para que funcione

## Lista de tareas v1.0.0
-----------------------------------------------------------------

- [x] reduciendo al mínimo el código
- [x] Habilitar inserción de \_item_
- [x] Habilitar vista de \_item_
- [x] habilitar eliminación de \_item_
- [x] Crear listado de items en página principal
- [x] Añadiendo estadísticas con helpers a la vista
- [x] Mejorar las vistas
   - [x] Cambiar los iconos
- [x] Añadir barra de navegación
- [x] Habilitar subida de archivo
  - [x] Enviar variable virtual a view para detectar la ruta del archivo relativa para que funcione el enlace de la vista _item_
  - [x] Borrando archivo de temp si error
- [x] GEstion de erroes con errorhandler
- [x] Borrar archivo tras borrar item
- [x] ***BUG*** Botón borrar sale fuera cuando pantalla pequeña 



