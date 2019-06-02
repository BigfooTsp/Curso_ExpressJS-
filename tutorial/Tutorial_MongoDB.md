# MongoDB

## Caracterísiticas
Permite que en una misma colección haya elementos de diferente estructura de datos.
## Instalación
### Incorporación al PATH en windows 10
## Puesta en marcha
## Sentencias
-----------------------------------------------------------------------------
Insertar elementos.
``` js
db.clientes.insert({...})
db.clientes.insertOne({...})
```

Modificar elementos
``` js
db.clientes.update({_id: '20000000L'}, {$set: {Nombre: 'Eduardo'}}):

// Sumando un año de antigüedad y añadiendo un campo
db.clientes.update({_id: '20000000L'}, {$inc: {antiguedad: 1}, $push: {Servicios: 'Administración'}});
```

Borrar elementos
``` js
// Borra todos los elementos
db.clientes.remove({})

// Borra por ID
db.clientes.remove({_id: '10000000L'}); // Borra por ID
```
Filtar elementos
``` js
// Muestra todos los elementos de la colección.
db.collection.find({})

// Con vista amigable
db.amigos.find().pretty()

// Fltrado por propiedad
db.clientes.find({Nombre: 'carlos'})

// Filtrado por ID
db.notes.findOne({'_id': ObjectId('5ce98dc301aaf6473847b24b')})

// Filtrando rangos
db.amigos.find({Edad: {$gt: 25}})                   // > 25
db.amigos.find({Edad: {$gt: 25}})                   // < 25
db.clientes.find({$or: [{Edad: 36}, {Edad: 38}]} ); // 36 a 38

// Muestra elementos que [no] tengan un campo concreto
db.amigos.find({Apellidos:{$exists:false}},{Nombre:1})

// Con proyección (Configuración de resultados)
db.notes.find({}, {'title':1})
db.notes.find({title: "Ejemplo de nota"},{_id:1})

// Ordena por antigüedad
db.clientes.find().sort({antiguedad: -1})

// Limita cantidad de resultados
db.clientes.find({Servicios: 'Hosting'}).limit(2);

// Cuenta cantidad de elementos.
db.clientes.count();
```

## Variables
Mongo permite guardar sentencias en variables y ejecutar estas posteriormente llamándolas.

``` js
// Declarar variable
var test = db.clientes.findOne()

// Usar variable
test{ "_id" : ObjectId("594d089576dd7cca79536b2b"), "Nombre" : "Carlos", "Apellidos" : "Garcia Perez", "Edad" : 36}
```
## Referencias
https://guiadev.com/tutorial-de-mongodb-parte-02-sinaxtis-de-consultas/  
https://guiadev.com/tutorial-de-mongodb-parte-03-sentencias/
