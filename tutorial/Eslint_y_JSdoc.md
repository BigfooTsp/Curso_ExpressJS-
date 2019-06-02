# Uso de la API

## Puesta en marcha

Instalar las dependendencias:
``` cmd
> npm install
```  

Iniciar ``Mongo`` y el servidor ``Express`` mediante los comandos:

``console 1``
``` cmd
> mongod
> use Pruebas
```

``console 2``
``` cmd
> npm run start  
```  
## Acceso a la API
Es posible realizar las siguientes **consultas y operaciones** sobre la base de datos mediante las siguientes direcciones y un software como ``Postman``:
- GET [localhost:3000/movies](http://localhost:3000/movies) muestra todas las películas.
- GET [localhost:3000/films/:id](http://localhost:3000/films/:id) muestra una película por su ID.
- POST [localhost:3000/film](http://localhost:3000/film) Añade una nueva película.  
    - Selecciona el verbo ``POST`` en ``Postman`` con la dirección indicada.  
    - Introduce en Body el archivo de película con el formato ``x-www-form-urlencoded``.  
![postman](.\images\postman-1.PNG)
- DELETE [localhost:3000/films/:id](http://localhost:3000/films/:id) Elimina un elemento por su id.

Este servidor puede mejorarse con módulo ``glob`` para manejar más páginas.  
Tal vez en una distribución de directorios diferentes tipo ``./public``, ``./server``.

# Documentando código con ``JSDOC``
Se utiliza el módulo [jsdoc](https://jsdoc.app/) para documentar el código. Este deberá de instalarse de la manera habitual  
``>npm install``.  
En el archivo ``package.json`` se añade el script ``buid-doc`` que genera la documentación en html.
El archivo ``jsdoc.json`` define la configuración de módulo.  

## Estructura básica de comentarios
___
Esto produce que en el propio editor de código esté disponible la ayuda en ``intellisense``, Además de permitir la generación de la documentación html.  

### Configuración del ``jsdoc``
``` json

```

### Documentando un archivo
``` js
/**
 * @fileoverview Menú aprMenu, desplegable con efecto expansión suavizado
 *
 * @version                               2.2
 *
 * @author                 César Krall <cesarkrall@aprenderaprogramar.com>
 * @copyright           aprenderaprogramar.com
 *
 * History
 * v2.2 – Se mejoró el efecto de expansión de los submenús dándole efecto aceleración
 * v2.0 – Se evitó que quedaran supersupuestos textos de submenús
 * v1.1 – Se mejoró la compatibilidad con navegadores Opera
 * ----
 * La primera versión de aprMenu fue escrita por Karl Monitrix
*/
```
### Documentando una función
``` js
/**
* Funcion para sumar dos numeros
* @param {number} a 
* @param {number} b
* @return {number}
*/
function sum(a, b){
    return a + b;
}
``` 

### Comentarios para constructores
``` js
/** @constructor */
project.MiDefinicionDeTipoDeObjeto = function() {
  /**
   * Propiedad que indica el número máximo de colores permitidos.
   * @type {number}
   */
  this.maxNumeroColores = 4;
}
``` 

## Etiquetas
Las [etiquetas](https://code.google.com/archive/p/jsdoc-toolkit/wikis/TagReference.wiki) personalizan y amplían la documentacion. Las más utilizadas son:

**@class**  
Esta etiqueta define una función como un constructor, destinada a ser llamada con su nombre para devolver una instancia.
@class {tipo} {nombre}

**@description**  
Proporciona una descripción general del segmento de código que se está documentando.
@description Descripción del segmento

**@param**  
Especifica el nombre, el tipo y la descripción de un parámetro de una función o un método.
@param {tipo} Descripción del parámetro

**@property**  
Esta etiqueta provee una forma de documentar fácilmente una lista de propiedades estáticas de una clase, namespace u otro objeto.
@property {tipo} Nombre de la propiedad

**@returns**  
Documenta el valor de retorno de una función.
@returns {tipo} Descripción

**@type**  
Ofrece información acerca del tipo de valor que puede ser contenido en un objeto o variable, entre otros.
@type&nbsp;{tipo}

**@typedef**  
Esta etiqueta es útil para documentar tipos personalizados, especialmente si desea consultarlos repetidamente.
@typedef {tipo} Nombre

## template
Para mejorar la apariencia de la documentación. 

### **better-docs**  
Se utiliza el template [better-docs](https://github.com/SoftwareBrothers/better-docs)
``` cmd
> npm install --save-dev better-docs
```

Se podrá ejecutar con el comando
``` cmd
> npm run build-doc
```

### **jaguarjs-jsdoc**  

[jaguarjs-jsdoc](https://github.com/davidshimjs/jaguarjs-jsdoc)
Instalar en el proyecto mediante el comando
``` cmd
> git clone https://github.com/davidshimjs/jaguarjs.git
```
Esto creará el directorio *jaguaris*  

Al final tras trastear un buen rato con esto de la generación de documentación parece que ninguna opción se adapta a lo que quiero hacer y el código resultante es muy feo, dificil de leer.

----
----
**Referencias**:  
https://code.google.com/archive/p/jsdoc-toolkit/  
https://blog.michelletorres.mx/documentacion-de-api-javascript-con-jsdoc/  
https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=881:guia-de-estilo-javascript-comentarios-proyectos-jsdoc-param-return-extends-ejemplos-cu01192e&catid=78&Itemid=206

# Configuración de ESlint
``` cmd
> npm install eslint
> npm install eslint-config-airbnb-base
> npm install eslint-plugin-import
> npm i -D eslint babel-eslint
> npm i -D eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react
> npm install
```
Con lo siguiente ese crea el archivo de configuración .eslintrc
``` cmd
eslint init
```
incorporar la siguiente linea en el archivo de configuración del editor.
``"eslint.autoFixOnSave": true,``