var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require("mongoose");
var app = express();


//Configuracion 
app.use(bodyParser.json());
app.use(methodOverride());

//definir el puerto por el que vamos a escuchar

app.listen(3000, function () {
    console.log("nuestro servidor escucha por el puerto 3000");
});
// conexion con  la base de datos 

mongoose.connect('mongodb://localhost/cursonandroid2017', function(err, res){
    if(err)
    {
        console.log('ERROR: No se puede conectar con la base de datos'+ err);

    }else{
        console.log('Conectado a MongoDB');
    }
});

//definir el enrutamiento de las instrucciones

var controladorPersona= require('./controladores/PersonaControlador');

var router = express.Router();

router.get('/',function(req, res){
  res.send("<h3>Hola mundo<h3>");
});


//-----------------------------------------------------------------------------------------------------------//

//estos son los endpoin para las operaciones del controlador 



//agregar personas
router.post('/API/persona/AddPersona',function(req,res ){
    controladorPersona.addPersona(req , function (data){
        res.send(data);

    });
});
//actualizar persona 
router.put('/API/persona/UpdatePersona/:id',function(req,res ){
    controladorPersona.updatePersona(req , function (data){
        res.send(data);

    });
});


//eliminar Persona 
 router.delete('/API/persona/DeletePersona/:id', function(req, res){
    controladorPersona.deletePersona(req , function (data){
        res.send(data);
   });
});


//todas las personas 
router.get('/API/persona/finAlldPersona',function(req,res ){
    controladorPersona.finAlldPersona(req , function (data){
        res.send(data);

    });
});

//buscar una persona 
router.get('/API/persona/findPersona/:id',function(req,res ){
    controladorPersona.findByIdPersona(req , function (data){
        res.send(data);

    });
});

//------------------------------------------------------------------------------------------------//


app.use(router);