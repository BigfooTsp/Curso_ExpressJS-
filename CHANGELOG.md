## v.1.1.5
- Logout funcional
- Mejorada barra de navegación
- se añade 'helper' auth.js para evitar ingreso a enlace 'notas' si no se ha iniciado sesión


## v.1.1.4
- Añadida barra de navegación
- Mejoradas las vistas


## v.1.1.3
- Comprobación de password con base de datos
- Inicio de sesión funcional
- redirección a página de notas tras inicio de sesión


## v.1.1.2
- Creando nuevos usuarios en la base de datos
- Añade *user* como variable global a *index.js*
- Guarda el *password* en la base de datos **encriptado**
- Muestra mensaje de *usuario registrado* y redirecciona al *signin*


## v.1.1.1
- Añadido registro de usuario test
  - layouts *signup*
  - partial *errors.hbs* para mostrar errores


## v.1.1.0
- CRUD funcional finalizado
- Se aplica información por mensajes al usuario utilizando el módulo *request-flash*


## v.1.0.7
- Eliminar notas funcional


## v.1.0.6
- Boton de *delete* en notas
- Añadida vista para mostrar si no hay notas en la base de datos
- boton *editar nota* funcional
  - Se añade conexión a la base de datos para editarla


## v.1.0.5
- Se añaden iconos al cuadro de notas mediante [fontawesome.com](fontawesome.com)  
- Se añade documento [BUGS.md](BUGS.md)


## v.1.0.4
- Añade nueva nota a base de datos
- Muestra vista con todas las notas
- Añadida configuración y módulos de eslint


## v.1.0.3
- Se añade formulario de 'New Note' que envía datos con método *POST*.
- El server recibe datos del formulario (desde frontend) pero no se tratan aun.
- Se añade alerta con boostrap indicando error si al añadir una nueva nota se deja sin rellenar alguno de los campos.


## v.1.0.2
- Aplicado framework de CSS Bootstrap para vistas principales.


## v.1.0.1
- Añadida gestión de vistas con *.hbs*


## v.1.0.0- Inicio del proyecto.
- Estructura básica creada
- Servidor funcional en puerto 3000
- Direccionamiento de rutas creada con respuesta 'test'
- Conexión con base de datos unsando *Mongoose*

Se inica el proyecto con la estructura creada y el funcionamiento mínimo con conexión a base de datos