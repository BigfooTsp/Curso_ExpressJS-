# Gráfico de explicación del proyecto
![](/tutorial/images/ImShare.jpeg)

# Changelog

### ... Contador de visitas y likes funcional
- Se activa contador de visitas de las imágenes
- Se añade scripts javascript a las vistas
  - JQuery
  - Custom */public/js/scripts.js*

### ... Comentarios funcionales
- Se añaden comentrios a la vista imagen
  - Añadir comentarios funcional
  - Usa perfiles de *gravatar.com*
  - Se añade modelo *comment* para base de datos
  - se guardan en disco duro
- Rectificadas rutas de */routes/index*


### ... Vista de imagen
- Se hacen funcionales los enlaces de la imagen
- Al subir imagen se redirecciona a su vista
- La vista incluye iconos de likes, views y un contador de tiempo.
  -Se añade *helper handlebars* para represental legible el atributo datetime del item mongo de la imagen


### ... Vista home con las imágenes subidas
- El controller *home* genera la variable *{{{images}}* con las imágenes y lo envía a la vista *index.hbs*


### ... Guardado de datos de imagen en Mongo
- modelo de Image para base de datos
- Guardado en la base de datos
  -Gestión de errores
    - Elimina el archivo del directorio */public/temp* si ha habido algún error
    - Devuelve respuesta 500 y mensaje de 'solo se permiten imágenes'
    - Se aplica una función recursiva que comprueba si el nombre está repetido


### ... guardado de imagen en /public/uploads
-Subida de imágenes activa
  - Uso de helper *randomNumber()* para renombrar los archivos upload
  - Primero se guarda en */public/upload/temp*, se genera un nuevo nombre aleatorio y se mueve a */public/upload*


### ... Formulario de subir imagen (layout)
- Añadido wiew de index (home)
- Formulario de subir imagen permite seleccionar archivo


### ... Vistas home y layout. Bug view [x]
- Aplicación de vistas
  - Se añade vista home con layout main (cabecera con logo)
  - Uso de Bootstrap cpmp framework CSS
  - Uso de fontsawesome.com como proveedor de iconos
  - Modificaciones peronalizadas de estilo en archivo */public/stiles.css*
- Solucionado BUG en el que estaba mal configurado el directorio de vistas en express y no redireccionaba bien.



## v.1.0.1
- Cambiado enrutamiento, usando objeto *Express.Router()*
- Se agrega uso de controladores en el direccionamiento.



## v.1.0.0- Inicio del proyecto.
- Estructura básica creada para proyecto de red social
- modulos instalados y actualizados
- Añadido tutorial con el proyecto terminado
- Añadida configuración de Eslint
- Servidor funcional en puerto 3000
- Conexión con base de datos unsando *Mongoose*
- Direccionamiento de rutas creada con respuesta 'test' a '/'
